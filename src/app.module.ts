import { Module } from '@nestjs/common';
import { prismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { UsersModule } from './module/users/users.module';
import { BankModule } from './module/bank/bank.module';
import { CardModule } from './module/card/card.module';

@Module({
  imports: [ConfigModule.forRoot(config),prismaModule, UsersModule, BankModule, CardModule],
})
export class AppModule {}
