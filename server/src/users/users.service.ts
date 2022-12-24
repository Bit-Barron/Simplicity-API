import { Body, Injectable } from '@nestjs/common';

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
      suite: `${Math.floor(Math.random() * 30)}`,
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
      suite: `${Math.floor(Math.random() * 30)}`,
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
      suite: `${Math.floor(Math.random() * 30)}`,
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
      suite: `${Math.floor(Math.random() * 30)}`,
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
      suite: `${Math.floor(Math.random() * 300)}`,
    },
  },
  {
    id: 6,
    name: 'luis',
    email: 'luis@gmail.com',
    website: 'https://www.luis.com',
    username: `luis${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'HIGHLAND ',
      city: 'JONESBORO',
      suite: `${Math.floor(Math.random() * 300)}`,
    },
  },
  {
    id: 7,
    name: 'vic',
    email: 'vic@gmail.com',
    website: 'https://www.vic.com',
    username: `vic${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'SHILOH DR',
      city: 'FAYETTEVILLE',
      suite: `${Math.floor(Math.random() * 300)}`,
    },
  },
  {
    id: 8,
    name: 'lena',
    email: 'lena@gmail.com',
    website: 'https://www.lena.com',
    username: `lena${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'THREE STARS ROAD',
      city: 'EDMOND OK',
      suite: `${Math.floor(Math.random() * 300)}`,
    },
  },
  {
    id: 8,
    name: 'vegeta',
    email: 'vegeta@gmail.com',
    website: 'https://www.vegeta.com',
    username: `vegeta${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'EAST VALLEY BLVD',
      city: 'ALHAMBRA',
      suite: `${Math.floor(Math.random() * 300)}`,
    },
  },
  {
    id: 8,
    name: 'halulia',
    email: 'halulia@gmail.com',
    website: 'https://www.halulia.com',
    username: `halulia${Math.floor(Math.random() * 300)}`,
    createdAt: new Date(),
    addresses: {
      street: 'BRAND',
      city: 'GLENDALE',
      suite: `${Math.floor(Math.random() * 300)}`,
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
  createUser(body: any) {
    const newUser = {
      id: users.length + 1,
      ...body,
    }
    users.push(newUser);
    return newUser;
  }
}
