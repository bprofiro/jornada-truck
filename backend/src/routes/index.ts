import { Router } from 'express';
import usersRouter from './user.routes';
import pointsRouter from './points.routes';
import travelsRouter from './travel.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/points', pointsRouter);
routes.use('/travels', travelsRouter);

export default routes;
