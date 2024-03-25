import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { UsersController } from './users.controller'
import { User } from './users.model'
import { UsersService } from './users.service'

import { AuthModule } from 'auth/auth.module'
import { Role } from 'roles/roles.model'
import { RolesModule } from 'roles/roles.module'
import { UserRoles } from 'roles/user-roles.model'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
