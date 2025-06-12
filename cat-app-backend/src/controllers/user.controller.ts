import { Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userRouter = Router();
const userService = new UserService();

userRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

userRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials', error });
  }
});

export default userRouter;
