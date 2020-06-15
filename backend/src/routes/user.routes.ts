import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import Event from '../models/Event';
import CreateUserService from '../services/CreateUserService';
import CreatePointsUserService from '../services/CreatePointsUserService';
import CreateBonusUserService from '../services/CreateBonusUserService';
import CreateEventService from '../services/CreateEventService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const users = await usersRepository.find();
  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const {
      nome,
      cpf,
      senha,
      data_nascimento,
      autonomo,
      diabete,
      hipertensao,
      peso,
      depressao,
      medicacao,
      truck_oleo,
      truck_pneus,
      truck_revisao,
      truck_pastilhas_freio,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      nome,
      cpf,
      senha,
      data_nascimento,
      autonomo,
      diabete,
      hipertensao,
      peso,
      depressao,
      medicacao,
      truck_oleo,
      truck_pneus,
      truck_revisao,
      truck_pastilhas_freio,
    });

    delete user.senha;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

usersRouter.post('/pontos/:cpf', async (request, response) => {
  const { cpf } = request.params;

  const findUser = new CreatePointsUserService();

  const user = await findUser.execute(cpf);

  return response.json(user);
});

usersRouter.post('/bonus/:cpf', async (request, response) => {
  const { cpf } = request.params;

  const findUser = new CreateBonusUserService();

  const user = await findUser.execute(cpf);

  return response.json(user);
});

usersRouter.post('/events', async (request, response) => {
  try {
    const { evento, rua, cidade, estado } = request.body;

    const createEvent = new CreateEventService();

    const event = await createEvent.execute({
      evento,
      rua,
      cidade,
      estado,
    });

    return response.json(event);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

usersRouter.get('/events', async (request, response) => {
  const eventsRepository = getRepository(Event);
  const events = await eventsRepository.find();
  return response.json(events);
});

export default usersRouter;
