import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'

import * as process from 'process'

import { FilesModule } from './files/files.module'
import { Post } from './posts/posts.model'
import { PostsModule } from './posts/posts.module'

import { AuthModule } from 'auth/auth.module'
import { Role } from 'roles/roles.model'
import { RolesModule } from 'roles/roles.module'
import { UserRoles } from 'roles/user-roles.model'
import { User } from 'users/users.model'
import { UsersModule } from 'users/users.module'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Post],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
  ],
})
export class AppModule {}
