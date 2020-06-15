import { EntityRepository, Repository } from 'typeorm';
import Point from '../models/Point';

@EntityRepository(Point)
class PointsRepository extends Repository<Point> {
  public async findById(id: string): Promise<Point | null> {
    const findPoint = await this.findOne({
      where: { id },
    });
    return findPoint || null;
  }
}

export default PointsRepository;
