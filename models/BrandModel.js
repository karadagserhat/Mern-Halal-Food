import mongoose, { mongo } from 'mongoose';
import { BRAND_STATUS, CATEGORY } from '../utils/constants.js';

const BrandSchema = new mongoose.Schema(
  {
    brandName: String,
    companyName: String,
    address: String,

    certificateNumber: Number,
    certificateIssueDate: Date,
    certificateExpirationDate: Date,
    image: String,

    brandStatus: {
      type: String,
      // enum: ['confirmed', 'cancelled', 'pending', 'expired'],
      enum: Object.values(BRAND_STATUS),
      default: BRAND_STATUS.PENDING,
    },

    category: {
      type: String,
      enum: Object.values(CATEGORY),
      default: CATEGORY.WHITE_MEAT,
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Brand', BrandSchema);
