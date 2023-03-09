import { Global, Module } from '@nestjs/common';
import { prismaService } from './prisma.service';

@Global()
@Module({
  exports: [prismaService],
  providers: [prismaService],
})
export class prismaModule {}
