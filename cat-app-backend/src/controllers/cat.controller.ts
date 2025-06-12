import { Router, Request, Response } from 'express';
import { CatService } from '../services/cat.service';

const catRouter = Router();
const catService = new CatService();

catRouter.get('/breeds', async (_req: Request, res: Response) => {
  try {
    const breeds = await catService.getBreeds();
    res.status(200).json(breeds);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving breeds', error });
  }
});

catRouter.get('/breeds/:id', async (req: Request, res: Response) => {
  try {
    const breed = await catService.getBreedById(req.params.id);
    res.status(200).json(breed);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving breed by ID', error });
  }
});

catRouter.get('/breeds/search/:query', async (req: Request, res: Response) => {
  try {
    const results = await catService.searchBreeds(req.params.query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error searching breed', error });
  }
});

export default catRouter;
