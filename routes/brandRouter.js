import { Router } from 'express';
import {
  getAllBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  showStats,
} from '../controllers/brandController.js';
import {
  validateBrandInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import {
  authenticateUser,
  checkForTestUser,
} from '../middleware/authMiddleware.js';

const router = Router();

router.use(authenticateUser);

router
  .route('/')
  .get(getAllBrands)
  .post(checkForTestUser, validateBrandInput, createBrand);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getBrand)
  .patch(checkForTestUser, validateBrandInput, validateIdParam, updateBrand)
  .delete(checkForTestUser, validateIdParam, deleteBrand);

export default router;
