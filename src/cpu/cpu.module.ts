import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';
// import { PowerService } from '../power/power.service';

@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService]
})
export class CpuModule {}
