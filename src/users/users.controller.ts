import { 
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Param,
    Query,
    Body,
    NotFoundException,
    Session,
    // UseInterceptors,
    // ClassSerializerInterceptor,
} from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

import { UsersService } from './users.service';

import { Serialize } from '../interceptors/serialize.interceptor';
// import { SerializeInterceptor } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
    constructor(
        private usersService: UsersService,
        private authService: AuthService
    ) {}

    @Get('/colors/:color')
    setColor(@Param('color') color: string, @Session() session: any) {
        console.log('setColor: session: ', session);
        console.log('color = ' + color);
        if (session.colors) {
            session.colors.push(color);
        } else {
            session.colors = [color];
        }
        console.log('session.colors: ', session.colors);
    }

    @Get('/colors')
    getColor(@Session() session: any) {
        console.log('getColor: session: ', session);
        return session.colors ? session.colors.join(', ') : '';
    }

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        return this.authService.signup(body.email, body.password);
    }

    @Post('/signin')
    signin(@Body() body: CreateUserDto) {
        return this.authService.signin(body.email, body.password);
    }

    @Get('/:id')
    async findUser(@Param('id') id: string) {
        console.log('controller 1');
        const user = await this.usersService.findOne(parseInt(id));
        console.log('controller 2');
        if (!user) {
            throw new NotFoundException('user not found');
        }
        console.log('controller 3');
        return user;
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email);
    }

    @Delete('/:id')
    async removeUser(@Param('id') id: string) {
        console.log('controller.delete1');
        const result = await this.usersService.remove(parseInt(id));
        return result;
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {        
        console.log('controller.updateuser: body: ', body);
        return this.usersService.update(parseInt(id), body);
    }

}
