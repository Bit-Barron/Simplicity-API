import { Injectable } from '@nestjs/common';


const names  = [
  "new",
  "old",
  "big",
  "small",
  "medium",
  "tiny",

]

const users = [
  {
    id: 1,
    name: 'John Does',
    email: `${name}@gmail.com`,
    website: `https://www.${name}.com`,
    username: `${name}${Math.floor(Math.random() * 1000)}`,
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
    website: `https://www.${name}.com`,
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
    website: `https://www.${name}.com`,
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
    website: `https://www.${name}.com`,
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
    website: `https://www.${name}.com`,
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
    email: `${name}@gmail.com`,
    website: `https://www.${name}.com`,
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
    email: `${name}@gmail.com`,
    website: `https://www.${name}.com`,
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
    email: `${name}@gmail.com`,
    website: `https://www.${name}.com`,
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
