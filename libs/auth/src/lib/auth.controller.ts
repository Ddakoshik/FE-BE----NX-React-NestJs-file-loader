import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api/auth')
export class AuthController {
  @Get()
  auth() {
    return {
      authenticated: true,
    };
  }

  @Post()
  authenticate(@Body() postData: { username: string; password: string }) {
    const { username, password } = postData;
    // check the database
    console.log(username, password);
  }
}