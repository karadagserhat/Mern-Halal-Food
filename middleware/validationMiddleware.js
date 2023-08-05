import { body, param, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import Brand from '../models/BrandModel.js';
import User from '../models/UserModel.js';
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import { BRAND_STATUS, CATEGORY } from '../utils/constants.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith('no brand'))
          throw new NotFoundError(errorMessages);

        if (errorMessages[0].startsWith('not authorized'))
          throw new UnauthorizedError('not authorized to access this route');

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateBrandInput = withValidationErrors([
  body('companyName').notEmpty().withMessage('company name is required'),
  body('brandName').notEmpty().withMessage('brand name is required'),
  body('address').notEmpty().withMessage('address is required'),
  body('brandStatus')
    .isIn(Object.values(BRAND_STATUS))
    .withMessage('invalid status value'),
  body('category')
    .isIn(Object.values(CATEGORY))
    .withMessage('invalid category value'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('invalid MongoDB id');
    const brand = await Brand.findById(value);

    if (!brand) throw new NotFoundError(`no brand with id ${value}`);

    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === brand.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('not authorized to access this route');
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) throw new BadRequestError('email already exists');
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId)
        throw new BadRequestError('email already exists');
    }),
]);
