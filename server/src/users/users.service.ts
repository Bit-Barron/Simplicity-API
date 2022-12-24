import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'doe@gmail.com',
    website: 'https://www.doe.com',
    username: `doe${Math.floor(Math.random() * 300)}`,
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
    email: 'jane@gmail.com',
    website: 'https://www.jane.com',
    username: `Jane${Math.floor(Math.random() * 300)}`,
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
    email: 'tomas@gmail.com',
    website: 'https://www.tomas.com',
    username: `Tomas${Math.floor(Math.random() * 300)}`,
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
    email: 'victor@gmail.com',
    website: 'https://www.victor.com',
    username: `Victor${Math.floor(Math.random() * 300)}`,
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
    email: 'jose@gmail.com',
    website: 'https://www.luis.com',
    username: `Jose${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: '098',
    },
  },
  {
    id: 3,
    name: 'luis',
    email: 'luis@gmail.com',
    website: 'https://www.luis.com',
    username: `luis${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: '098',
    },
  },
  {
    id: 3,
    name: 'vic',
    email: 'vic@gmail.com',
    website: 'https://www.vic.com',
    username: `vic${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: '098',
    },
  },
  {
    id: 3,
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
