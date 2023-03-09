import { Injectable } from '@nestjs/common';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: prismaService
  ){}

  async create(payload: any):Promise<void> {
    await this.prisma.users.create({
      data: {
        name: payload.name,
        bank: {
          connect: [{id: +payload.bank}]
        }
      },
      include: {
        bank: true
      }
    })
  }

  async get() :Promise<any[]>{
    return await this.prisma.users.findMany({include: {bank: true}})
  }

  async add(id: number, payload: any | unknown): Promise<'added'>{
    await this.prisma.users.update({
      data: {
        bank: {
          connect: [{id: +payload.bank}]
        }
      },
      where: {id}
    })
    return;
  }

  async update(payload: any, id: number): Promise<void>{
    await this.prisma.users.update({
      data: {
        name: payload.name
      }, 
      where: {id}
    })
  }
  
  async delete(id:number): Promise<void>{
    await this.prisma.users.delete({where: {id}})
  }
}
