import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('points')
class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  tipo: 'saúde' | 'alimentação' | 'manutenção' | 'descanso';

  @Column()
  likes: number;

  @CreateDateColumn()
  created_at?: Date;
}

export default Point;
