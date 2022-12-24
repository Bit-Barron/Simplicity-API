import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'if you see the users list go to https://simplicity-api-ald2.vercel.app/users';
  }
}
