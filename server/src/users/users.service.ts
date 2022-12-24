import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: `${name}@gmail.com`,
    website: 'https://www.doe.com',
    username: 'doe',
    createdAt: new Date(),
    addresses: {
      street: 'GENTLE RAIN DRIVE, MARANA',
      city: 'LOCH NESS ROAD',
      suite: '13',
    },
  },
  {
    id: 2,
    name: 'Jane',
    email: `${name}@gmail.com`,
    website: 'https://www.jane.com',
    username: 'jane012',
    createdAt: new Date(),
    addresses: {
      street: 'MELODY DRIVE',
      city: 'METAIRIE',
      suite: '23',
    },
  },
  {
    id: 3,
    name: 'Tomas',
    email: `${name}@gmail.com`,
    website: 'https://www.tomas.com',
    username: 'tomasshell',
    createdAt: new Date(),
    addresses: {
      street: 'CHARDONNAY DRIVE',
      city: 'MACUNGIE',
      suite: '435',
    },
  },
  {
    id: 4,
    name: 'victor',
    email: `${name}@gmail.com`,
    website: 'https://www.victor.com',
    username: 'victorBig',
    createdAt: new Date(),
    addresses: {
      street: 'SUNFLOWER',
      city: 'LAKE FOREST',
      suite: '466',
    },
  },
  {
    id: 5,
    name: 'jose',
    email: `${name}@gmail.com`,
    website: 'https://www.luis.com',
    username: 'luisNew',
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: '098',
    },
  },
  {
    id: 6,
    name: 'luis',
    email: 'luis@gmail.com',
    website: 'https://www.luis.com',
    username: 'luisNew',
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: '098',
    },
  },{
    id: 7,
    name: 'luis',
    email: 'luis@gmail.com',
    website: 'https://www.luis.com',
    username: 'luisNew',
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: '098',
    },
  },{
    id: 8,
    name: 'luis',
    email: 'luis@gmail.com',
    website: 'https://www.luis.com',
    username: 'luisNew',
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: '098',
    },
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
    return users.find(
      (user) => user.id === id && users.splice(users.indexOf(user), 1),
    );
  }
}
