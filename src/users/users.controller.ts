import { Controller, Get, Param, ParseIntPipe, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  getUsers() {
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }
  @Delete(':id')
  public deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUserById(id);
  }

}
