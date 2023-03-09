import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BankService {
  constructor(
    private readonly prisma: prismaService
  ){}
  async create(payload: any) {
    await this.prisma.bank.create({
      data: {
        name: payload.name,
        users: {
          connect: [{id: +payload.id}]
        }
      }
    })
  }

  async findAll() {
    return this.prisma.bank.findMany({include: {users: true}})
  }

  async update(id: number, payload: any | unknown): Promise<void> {
    await this.prisma.bank.update({data: {
      name: payload.name
    },
    where: {id}
  })
  }

  async remove(id: number): Promise<void> {
    this.prisma.bank.delete({where: {id}})
  }
}
