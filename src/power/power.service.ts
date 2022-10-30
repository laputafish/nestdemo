import { Injectable } from '@nestjs/common';
import { writeHeapSnapshot } from 'v8';

@Injectable()
export class PowerService {
    consumePower(power: number) {
        console.log('consume power ' + power + ' watt.');
    }
}
