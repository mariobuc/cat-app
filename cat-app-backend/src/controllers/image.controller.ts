import { Router, Request, Response } from 'express';
import { ImageService } from '../services/image.service';

const imageRouter = Router();
const imageService = new ImageService();

imageRouter.get('/imagesbybreedid/:breedId', async (req: Request, res: Response) => {
  try {
    const images = await imageService.getImagesByBreedId(req.params.breedId);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving images', error });
  }
});

export default imageRouter;
