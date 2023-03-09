import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { prismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, prismaService]
})
export class UsersModule {}
