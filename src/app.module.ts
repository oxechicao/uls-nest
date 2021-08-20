import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudeiModule } from './crudei/crudei.module';

@Module({
  imports: [CrudeiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
