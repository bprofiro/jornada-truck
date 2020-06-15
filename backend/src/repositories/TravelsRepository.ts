import Travel from '../models/Travel';

interface CreateTravel {
  inicio: string;
  final: string;
  frete: number;
  manutencao: boolean;
}

class TravelsRepository {
  private travels: Travel[];

  constructor() {
    this.travels = [];
  }

  public all(): Travel[] {
    return this.travels;
  }

  public create({ inicio, final, frete, manutencao }: CreateTravel): Travel {
    const travel = new Travel({ inicio, final, frete, manutencao });

    this.travels.push(travel);

    return travel;
  }
}

export default TravelsRepository;
