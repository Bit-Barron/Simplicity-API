import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Post,
  Body,
} from '@nestjs/common';
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
    const res = this.usersService.getUserById(id);
    return res;
  }
  @Delete(':id')
  public deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUserById(id);
  }
  @Post('')
  public createOne(@Body() user) {
    return this.usersService.createUser(user);
  }
}
