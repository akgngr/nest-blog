import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'This is signin';
  }
  signup() {
    return 'This is signup';
  }
}
