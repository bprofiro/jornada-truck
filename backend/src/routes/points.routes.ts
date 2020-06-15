import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import PointsRepository from '../repositories/PointsRepository';
import CreatePointService from '../services/CreatePointService';
import CreateLikesPointsService from '../services/CreateLikesPointsService';

const pointRouter = Router();

pointRouter.get('/', async (request, response) => {
  const pointsRepository = getCustomRepository(PointsRepository);
  const points = await pointsRepository.find();
  return response.json(points);
});

pointRouter.post('/', async (request, response) => {
  try {
    const { nome, rua, cidade, estado, tipo } = request.body;

    const createPoint = new CreatePointService();

    const point = await createPoint.execute({
      nome,
      rua,
      cidade,
      estado,
      tipo,
    });

    return response.json(point);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

pointRouter.post('/likes/:id/:cpf', async (request, response) => {
  const { id, cpf } = request.params;

  const findPoint = new CreateLikesPointsService();

  const point = await findPoint.execute(id, cpf);

  return response.json(point);
});

export default pointRouter;
