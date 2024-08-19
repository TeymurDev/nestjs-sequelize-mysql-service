import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';

@Controller('/api/v1/get-user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }
}
