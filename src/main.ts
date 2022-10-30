import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
// import { MessagesModule } from './messages/messages.module';
// import { ComputerModule } from './computer/computer.module';
import { AppModule } from './app.module';

const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['asdfasdfd']
  }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  app.listen(7888, () => {
    console.info("Listening 7888 ...");
  });
}

bootstrap();
