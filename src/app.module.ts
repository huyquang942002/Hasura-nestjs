import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  imports: [PaymentModule],
  controllers: [AppController],
  providers: [
    {
      // When @Inject() asks us for an "AppService"
      provide: 'AppService',
      // Use an instance of the AppService class as the provided value
      useClass: AppService,
    },
  ],
})
export class AppModule {}
