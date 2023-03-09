import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { prismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BankController],
  providers: [BankService, prismaService]
})
export class BankModule {}
