import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';

@Injectable()
export class ReportsService {
    static create(price: number) {
        throw new Error('Method not implemented.');
    }    
    constructor (@InjectRepository(Report) private repo: Repository<Report>) {}

    create(price: number) {
        const report = this.repo.create({price});
        return this.repo.save(report);
    }
}
