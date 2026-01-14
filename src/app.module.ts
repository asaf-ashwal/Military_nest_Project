import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { AuthModule } from './auth/auth.module';
import { ShiftModule } from './shift/shift.module';
import { Shift } from './shift/shift.entity';
import { AssignmentModule } from './assignment/assignment.module';
import { Assignment } from './assignment/assignment.entity';

@Module({
    imports: [
     
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpass123',
      database: 'military_project',
      entities: [Users,Shift,
        Assignment
      ],
      synchronize: true,
      autoLoadEntities: true
    }),
     
    UsersModule,
     
    AuthModule,
     
    ShiftModule,
     
    // AssignmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
