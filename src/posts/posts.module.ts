import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { FilesModule } from '../files/files.module'
import { User } from '../users/users.model'
import { PostsController } from './posts.controller'
import { Post } from './posts.model'
import { PostsService } from './posts.service'

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
