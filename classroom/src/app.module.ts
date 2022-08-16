import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { TestResolver } from './http/test.resolver';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
