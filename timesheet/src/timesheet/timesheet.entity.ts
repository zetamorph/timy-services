import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Timesheet {
    @PrimaryGeneratedColumn()
    public id!: string;

    @Column()
    public description!: string;
}
