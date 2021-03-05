import { Global, Module } from '@nestjs/common';
import { AppConfig } from './app.config';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Global()
@Module({
  imports: [ConfigModule.forRoot(), MikroOrmModule.forRoot()],
  providers: [AppConfig],
  exports: [AppConfig],
})
export class InfrastructureModule {}
