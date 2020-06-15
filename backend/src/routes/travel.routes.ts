import { Router } from 'express';
import TravelsRepository from '../repositories/TravelsRepository';
import CreateTravelService from '../services/CreateTravelService';

const travelsRepository = new TravelsRepository();

const travelRouter = Router();

travelRouter.post('/:cpf', async (request, response) => {
  try {
    const { cpf } = request.params;
    const { inicio, final, frete, manutencao } = request.body;

    const createTravel = new CreateTravelService(travelsRepository);

    const travel = await createTravel.execute({
      inicio,
      final,
      frete,
      manutencao,
      cpf,
    });

    return response.json(travel);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

export default travelRouter;
