import { Controller, Get } from '@nestjs/common';

import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor (
        private cpuService: CpuService,
        private diskService: DiskService) {}

    @Get('process')
    process() {
        const computeResult = this.cpuService.compute(3,4);
        console.log('Computer.process result = ' + computeResult);
        const getResult = this.diskService.getData();
        console.log('Computer.process store.result = ' + getResult);
        return getResult;
    }
}
