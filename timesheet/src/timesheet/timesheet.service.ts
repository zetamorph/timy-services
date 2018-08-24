import { Inject, Service } from 'typedi';
import { EntityManager } from 'typeorm';
import { EntityManagerToken, TimesheetServiceToken } from '../injection-tokens';
import { Timesheet } from './timesheet.entity';

@Service(TimesheetServiceToken)
export class TimesheetService {

    constructor(
        @Inject(EntityManagerToken)
        private readonly manager: EntityManager,
    ) {}

    public async create(timesheetDto: Partial<Timesheet>): Promise<Timesheet> {
        const timesheet = Object.assign(new Timesheet(), timesheetDto);
        return this.manager.save(timesheet);
    }
}
