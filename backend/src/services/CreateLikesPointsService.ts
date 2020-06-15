import { EntityRepository, getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import PointsRepository from '../repositories/PointsRepository';
import UsersRepository from '../repositories/UsersRepository';
import Point from '../models/Point';
import User from '../models/User';

interface ResponseDTO {
  findPoint: Point;
  findUser: User;
}

@EntityRepository(Point)
class CreateLikesPointsService {
  public async execute(id: string, cpf: string): Promise<ResponseDTO> {
    const pointsRepository = getCustomRepository(PointsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const findPoint = await pointsRepository.findById(id);
    const findUser = await usersRepository.findByCPF(cpf);

    if (!findPoint) {
      throw new AppError('Esse ponto não existe.');
    }

    if (!findUser) {
      throw new AppError('Esse CPF não existe.');
    }

    findPoint.likes += 1;

    findUser.pontos += 1;

    await pointsRepository.save(findPoint);

    await usersRepository.save(findUser);

    return { findPoint, findUser };
  }
}

export default CreateLikesPointsService;
