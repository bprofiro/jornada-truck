import { uuid } from 'uuidv4';

class Travel {
  id: string;

  inicio: string;

  final: string;

  frete: number;

  manutencao: boolean;

  constructor({ inicio, final, frete, manutencao }: Omit<Travel, 'id'>) {
    this.id = uuid();
    this.inicio = inicio;
    this.final = final;
    this.frete = frete;
    this.manutencao = manutencao;
  }
}

export default Travel;
