import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import { Container } from 'typedi';
import { createConnection } from 'typeorm';
import { connectionOptions } from './connection-options';
import { EntityManagerToken } from './injection-tokens';
import { logger } from './logger';
import { TimesheetController } from './timesheet/timesheet.controller';

const bootstrap = async () => {
    try {
        const connection = await createConnection(connectionOptions);
        Container.set(EntityManagerToken, connection.manager);
    } catch (err) {
        logger.error(err);
    }
};

const app = createKoaServer({
    controllers: [
        TimesheetController,
    ],
});

app.listen(3000, (err: Error) => {
    if (err) {
        logger.error(err);
        return;
    }
    logger.info('TimesheetService listening');
    bootstrap();
});
