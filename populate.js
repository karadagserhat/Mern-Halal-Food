import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Brand from './models/BrandModel.js';
import User from './models/UserModel.js';
try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOne({ email: 'serhat@email.com' });
  // const user = await User.findOne({ email: 'test@test.com' });

  const jsonBrands = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url))
  );
  const brands = jsonBrands.map((brand) => {
    return { ...brand, createdBy: user._id };
  });
  await Brand.deleteMany({ createdBy: user._id });
  await Brand.create(brands);
  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
