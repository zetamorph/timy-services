import { Controller, Get, Post } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { TimesheetServiceToken } from '../injection-tokens';
import { Timesheet } from './timesheet.entity';
import { TimesheetService } from './timesheet.service';

@Controller()
@Service()
export class TimesheetController {

    constructor(
        @Inject(TimesheetServiceToken)
        private readonly timesheetService: TimesheetService,
    ) {}

    @Post()
    public async createTimesheet(data: Partial<Timesheet>): Promise<any> {
        return this.timesheetService.create(data);
    }

    @Get()
    public async getAllTimesheets(): Promise<Timesheet[]> {
        return [

        ];
    }
}
