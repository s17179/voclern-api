import { Global, Module } from '@nestjs/common';
import { AppConfig } from './app.config';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [AppConfig],
  exports: [AppConfig],
})
export class InfrastructureModule {}
