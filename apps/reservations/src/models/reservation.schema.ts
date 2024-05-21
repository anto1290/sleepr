import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDoucment } from '@app/common';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDoucment {
  @Prop()
  startDate: Date;
  @Prop()
  timestamp: Date;
  @Prop()
  endDate: Date;
  @Prop()
  userId: string;
  @Prop()
  placeId: string;
  @Prop()
  invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
