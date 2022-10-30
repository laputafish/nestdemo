import { Module } from '@nestjs/common';
// import { PowerService } from '../power/power.service';
import { PowerModule } from '../power/power.module';
import { DiskService } from './disk.service';

@Module({
    imports: [PowerModule],
    // imports: [PowerService],
    providers: [DiskService],
    exports: [DiskService]
})
export class DiskModule {}
