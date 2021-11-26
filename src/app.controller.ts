import { Controller, Get, Request, Post, UseGuards, Logger } from "@nestjs/common"
import { AppService } from "./app.service"
import { AuthService } from "./services/auth/auth.service"
import { LocalAuthGuard } from "./services/auth/local-auth.guard"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }


  @Get()
  getHello(): string {
    Logger.log("hello")

    return this.appService.getHello()
  }
}
