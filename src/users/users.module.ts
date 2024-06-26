import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { AuthModule } from '../auth/auth.module'
import { Post } from '../posts/posts.model'
import { Role } from '../roles/roles.model'
import { RolesModule } from '../roles/roles.module'
import { UserRoles } from '../roles/user-roles.model'
import { UsersController } from './users.controller'
import { User } from './users.model'
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
