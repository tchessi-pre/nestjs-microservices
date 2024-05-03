import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'payment',
            brokers: ['127.0.0.1:9092'],
          },
          consumer: {
            groupId: 'payment-consumer',
          },
        },
      },
    ]),
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule { }