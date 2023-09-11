import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class Comman {}

export class BaseTable {

    @Column()
    createdBy: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    updatedBy: number

    @DeleteDateColumn()
    deletedAt: Date;

    @Column()
    deletedBy: number;
}

@Entity()
export class Test extends BaseTable{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
}