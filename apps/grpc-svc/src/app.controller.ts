import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateRequest,
  CreateResponse,
  ListResponse,
  USER_SERVICE_NAME,
} from './proto/user.pb';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod(USER_SERVICE_NAME, 'List')
  async listUsers(): Promise<ListResponse> {
    return {
      users: await this.appService.list(),
    };
  }

  @GrpcMethod(USER_SERVICE_NAME, 'Create')
  async create(user: CreateRequest): Promise<CreateResponse> {
    console.log(user);
    return {
      user: await this.appService.create(user),
    };
  }
}
