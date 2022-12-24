import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'if you see the users list go to http://localhost:3000/users';
  }
}
