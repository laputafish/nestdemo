import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
    constructor (public powerService: PowerService) {}

    compute(a: number, b: number) {
        this.powerService.consumePower(5);
        return a + b;
    }
}
