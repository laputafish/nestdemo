import { Controller, Post, Body } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) {}

    @Post('/create')
    createReport(@Body('price') priceStr: string) {
        const price:number = parseFloat(priceStr);
        const result = this.reportsService.create(price);
        return result;
    }
}
