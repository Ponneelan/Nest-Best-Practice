import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

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

export class ApiResponse {
    message:string;
    status:boolean;
    serviceCode:number;
    data:object

    constructor(message: string, serviceCode: number ,status: boolean,data: object = null) {
        this.message = message;
        this.serviceCode = serviceCode;
        this.status = status;
        this.data = data;
    }
}