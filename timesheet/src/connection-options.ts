import { ConnectionOptions } from 'typeorm';
import { Timesheet } from './timesheet/timesheet.entity';

export const connectionOptions: ConnectionOptions = {
    database: 'timesheets',
    entities: [
        Timesheet,
    ],
    host: 'timesheet_db',
    logging: true,
    migrations: [
        'src/migration/**/*.ts',
    ],
    password: '_pePK7D*-R&HusDc',
    port: 5432,
    subscribers: [
        'src/subscriber/**/*.ts',
    ],
    synchronize: true,
    type: 'postgres',
    username: 'postgres',
};
