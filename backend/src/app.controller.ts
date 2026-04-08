import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getStatus() {
    return {
      status: 'UP',
      timestamp: new Date().toISOString(),
      message: 'Wilds Web Competition API is running'
    };
  }
}
