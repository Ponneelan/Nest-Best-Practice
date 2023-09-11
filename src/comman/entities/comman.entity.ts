import { BaseTable } from 'src/helper/helper.class';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class Comman {}

@Entity()
export class Test extends BaseTable{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
}