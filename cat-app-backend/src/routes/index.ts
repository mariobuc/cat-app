import { Router } from 'express';
import catController from '../controllers/cat.controller';
import imageController from '../controllers/image.controller';
import userController from '../controllers/user.controller';

const router = Router();

router.use('/breeds', catController);
router.use('/imagesbybreedid', imageController);
router.use('/users', userController);

export default router;
