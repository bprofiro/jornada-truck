import { EntityRepository, getRepository } from 'typeorm';
import Point from '../models/Point';

interface RequestDTO {
  nome: string;
  rua: string;
  cidade: string;
  estado: string;
  tipo: 'saúde' | 'alimentação' | 'manutenção' | 'descanso';
}

@EntityRepository(Point)
class CreatePointService {
  public async execute({
    nome,
    rua,
    cidade,
    estado,
    tipo,
  }: RequestDTO): Promise<Point> {
    const pointsRepository = getRepository(Point);

    const point = pointsRepository.create({
      nome,
      rua,
      cidade,
      estado,
      tipo,
      likes: 0,
    });

    await pointsRepository.save(point);

    return point;
  }
}

export default CreatePointService;
