import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'doe@gmail.com',
    website: 'https://www.doe.com',
    username: 'doe',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@gmail.com',
    website: 'https://www.jane.com',
    username: 'jane012',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'Tomas',
    email: 'tomas@gmail.com',
    website: 'https://www.tomas.com',
    username: 'tomasshell',
    createdAt: new Date(),
  },
  {
    id: 4,
    name: 'victor',
    email: 'victor@gmail.com',
    website: 'https://www.victor.com',
    username: 'victorBig',
    createdAt: new Date(),
  }, {
    id: 3,
    name: 'luis',
    email: 'luis@gmail.com',
    website: 'https://www.luis.com',
    username: 'luisNew',
    createdAt: new Date(),
  },
];
@Injectable()
export class UsersService {
  getAllUsers() {
    return users;
  }
  getUserById(id: number) {
    if (id > 4) return 'Only have ' + users.length + ' users';
    return users.find((user) => user.id === id);
  }
  deleteUserById(id: number) {
    if (id > 4) return 'Only have ' + users.length + ' users';
    return users.find((user) => user.id === id && users.splice(users.indexOf(user), 1));
  }
}
