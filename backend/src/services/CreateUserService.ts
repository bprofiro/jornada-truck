import { EntityRepository, getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';
import UsersRepository from '../repositories/UsersRepository';
import User from '../models/User';

interface RequestDTO {
  nome: string;
  cpf: string;
  senha: string;
  data_nascimento: Date;
  autonomo: boolean;
  diabete: boolean;
  hipertensao: boolean;
  peso: 'obeso' | 'com sobrepeso' | 'adequado' | 'abaixo da média';
  depressao: boolean;
  medicacao: boolean;
  truck_oleo: Date;
  truck_pneus: Date;
  truck_revisao: Date;
  truck_pastilhas_freio: Date;
}

@EntityRepository(User)
class CreateUserService {
  public async execute({
    nome,
    cpf,
    senha,
    data_nascimento,
    autonomo,
    depressao,
    diabete,
    hipertensao,
    peso,
    medicacao,
    truck_oleo,
    truck_pneus,
    truck_revisao,
    truck_pastilhas_freio,
  }: RequestDTO): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const checkSameCPF = await usersRepository.findByCPF(cpf);

    if (checkSameCPF) {
      throw new AppError('This cpf is already registered.');
    }

    const hashedPassword = await hash(senha, 8);

    const user = usersRepository.create({
      nome,
      cpf,
      senha: hashedPassword,
      data_nascimento,
      autonomo,
      depressao,
      diabete,
      hipertensao,
      peso,
      medicacao,
      truck_oleo,
      truck_pneus,
      truck_revisao,
      truck_pastilhas_freio,
      pontos: 0,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
