import { Module } from '@nestjs/common';
import { PrismaService } from '../servise/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
