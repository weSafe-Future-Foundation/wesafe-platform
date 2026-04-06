import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { EventsModule } from './modules/events/events.module';
import { StudentsModule } from './modules/students/students.module';
import { DonationsModule } from './modules/donations/donations.module';
import { ContactModule } from './modules/contact/contact.module';
import { MarketingModule } from './modules/marketing/marketing.module';
import { LeaderboardModule } from './modules/leaderboard/leaderboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    EventsModule,
    StudentsModule,
    DonationsModule,
    ContactModule,
    MarketingModule,
    LeaderboardModule,
  ],
})
export class AppModule {}
