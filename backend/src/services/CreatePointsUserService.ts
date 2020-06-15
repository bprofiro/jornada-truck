import { EntityRepository, getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import UsersRepository from '../repositories/UsersRepository';
import User from '../models/User';

@EntityRepository(User)
class CreatePointsUserService {
  public async execute(cpf: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const findUser = await usersRepository.findByCPF(cpf);

    if (!findUser) {
      throw new AppError('Esse cpf não existe.');
    }

    findUser.pontos += 1;

    await usersRepository.save(findUser);

    return findUser;
  }
}

export default CreatePointsUserService;
