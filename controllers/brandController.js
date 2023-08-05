import Brand from '../models/BrandModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

export const getAllBrands = async (req, res) => {
  const { search, brandStatus, category, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { brandName: { $regex: search, $options: 'i' } },
      { companyName: { $regex: search, $options: 'i' } },
    ];
  }

  if (brandStatus && brandStatus !== 'all') {
    queryObject.brandStatus = brandStatus;
  }

  if (category && category !== 'all') {
    queryObject.category = category;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'brandName',
    'z-a': '-brandName',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalBrands = await Brand.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalBrands / limit);
  //

  const brands = await Brand.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  res.status(StatusCodes.OK).json({
    results: brands.length,
    totalBrands,
    numOfPages,
    currentPage: page,
    brands,
  });
};

export const createBrand = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const brand = await Brand.create(req.body);
  res.status(StatusCodes.CREATED).json({ brand });
};

export const getBrand = async (req, res) => {
  const brand = await Brand.findById(req.params.id);
  res.status(StatusCodes.OK).json({ brand });
};

export const updateBrand = async (req, res) => {
  const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'brand updated', brand: updatedBrand });
};

export const deleteBrand = async (req, res) => {
  const removedBrand = await Brand.findByIdAndDelete(req.params.id);

  res
    .status(StatusCodes.OK)
    .json({ msg: 'brand deleted', brand: removedBrand });
};

export const showStats = async (req, res) => {
  let stats = await Brand.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$brandStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    confirmed: stats.confirmed || 0,
    cancelled: stats.cancelled || 0,
    expired: stats.expired || 0,
  };

  let monthlyApplications = await Brand.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
