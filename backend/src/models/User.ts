import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  senha: string;

  @Column()
  data_nascimento: Date;

  @Column()
  autonomo: boolean;

  @Column()
  diabete: boolean;

  @Column()
  hipertensao: boolean;

  @Column()
  peso: 'obeso' | 'com sobrepeso' | 'adequado' | 'abaixo da média';

  @Column()
  depressao: boolean;

  @Column()
  medicacao: boolean;

  @Column()
  truck_oleo: Date;

  @Column()
  truck_pneus: Date;

  @Column()
  truck_revisao: Date;

  @Column()
  truck_pastilhas_freio: Date;

  @Column()
  pontos: number;

  @CreateDateColumn()
  created_at: Date;
}

export default User;
