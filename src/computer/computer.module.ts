import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';

import { CpuModule } from '../cpu/cpu.module';
import { CpuService } from '../cpu/cpu.service';
import { DiskModule } from '../disk/disk.module';
import { DiskService } from '../disk/disk.service';

@Module({
    imports: [CpuModule, DiskModule],
    controllers: [ComputerController]
})
export class ComputerModule {}
