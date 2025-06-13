import { Router } from 'express';
import catController from '../controllers/cat.controller';
import imageController from '../controllers/image.controller';
import userController from '../controllers/user.controller';

const router = Router();

router.use('/cats', catController);
router.use('/images', imageController);
router.use('/users', userController);

export default router;
