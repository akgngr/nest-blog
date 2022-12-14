import { AuthController } from './auth.controller';
import { Module, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
