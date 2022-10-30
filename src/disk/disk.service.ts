import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
    constructor (private powerService: PowerService) {}

    getData() {
        console.log('Drawing 20 watts of power from PowerService');
        this.powerService.consumePower(20);
        return 'data!';
    }

    storeData(data: any) {
        this.powerService.consumePower(5);
        console.log('disk.service: storeData: data: ', data);
    }
}
