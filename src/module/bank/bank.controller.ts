import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post('/create')
  create(@Body() body: any) {
    return this.bankService.create(body);
  }

  @Get('/get')
  findAll() {
    return this.bankService.findAll();
  }

  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() body: any | unknown) {
    return this.bankService.update(+id, body);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    return this.bankService.remove(+id);
  }
}
