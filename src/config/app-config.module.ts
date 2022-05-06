import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './service/app-config.service';

const envFilePath = 'config/.env';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ envFilePath })],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
