import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto: unknown): Promise<void >{
    
    return this.usersService.create(createUserDto);
  }

  @Post('/add/:id')
  add(@Body() body: unknown, @Param('id') id: number): Promise<'added'>{
    return this.usersService.add(+id, body)
  }

  @Get('/get')
  findAll(): Promise<any> {
    return this.usersService.get();
  }

  @Patch('/update/:id')
  update(@Body() body: any, @Param('id') id:number): Promise<void>{
    return this.usersService.update(body, +id)
  }


  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/delete/:id')
  delete(@Param('id') id:number):Promise<void>{
    return this.usersService.delete(+id)
  }
}