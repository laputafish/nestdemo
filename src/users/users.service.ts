import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}


    create(email: string, password: string) {
        const user = this.repo.create({email, password});
        return this.repo.save(user);
    }

    findOne(id: number) {
        return this.repo.findOneBy({id});
    }

    find(email: string) {
        return this.repo.find({where: {email}});
    }

    async update(id: number, attrs: Partial<User>) {
        console.log('service.update attrs: ', attrs);
        const user = await this.repo.findOneBy({id});
        if (!user) {
            throw new Error('user not found');
        }
        Object.assign(user, attrs);
        console.log('update user: ', user);
        return this.repo.save(user);
    }

    async remove(id: number) {
        console.log('service1');
        const user = await this.repo.findOneBy({id});
        console.log('service2');
        if (!user) {
            throw new Error('user not found');
        }
        console.log('service3');
        const result = await this.repo.remove(user);
        console.log('service4');
        return result;

    }
        
}
