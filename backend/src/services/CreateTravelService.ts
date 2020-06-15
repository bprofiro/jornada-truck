import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TravelsRepository from '../repositories/TravelsRepository';
import PointsRepository from '../repositories/PointsRepository';
import UsersRepository from '../repositories/UsersRepository';

import Travel from '../models/Travel';
import Point from '../models/Point';

interface TravelRequest {
  id?: string;
  inicio: string;
  final: string;
  frete: number;
  manutencao: boolean;
  cpf: string;
}

interface TravelResponse {
  travel: Travel;
  points: Point[];
  lucro: number;
}

class CreateTravelService {
  private travelsRepository: TravelsRepository;

  constructor(travelsRepository: TravelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  public async execute({
    inicio,
    final,
    frete,
    manutencao,
    cpf,
  }: TravelRequest): Promise<TravelResponse> {
    const travel = this.travelsRepository.create({
      inicio,
      final,
      frete,
      manutencao,
    });

    const pointsRepository = getCustomRepository(PointsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const findUser = await usersRepository.findByCPF(cpf);
    const points = await pointsRepository.find();

    if (!findUser) {
      throw new AppError('Esse CPF não existe.');
    }

    findUser.pontos += 1;

    await usersRepository.save(findUser);

    if (manutencao === true) {
      const lucro = frete - 771 - 200 - 500 - 1500;

      return { travel, points, lucro };
    }

    const lucro = frete;

    return { travel, points, lucro };
  }
}

export default CreateTravelService;
