import { EntityRepository, getRepository } from 'typeorm';
import Event from '../models/Event';

interface RequestDTO {
  evento: string;
  rua: string;
  cidade: string;
  estado: string;
}

@EntityRepository(Event)
class CreateEventService {
  public async execute({
    evento,
    rua,
    cidade,
    estado,
  }: RequestDTO): Promise<Event> {
    const eventsRepository = getRepository(Event);

    const event = eventsRepository.create({
      evento,
      rua,
      cidade,
      estado,
    });

    await eventsRepository.save(event);

    return event;
  }
}

export default CreateEventService;
