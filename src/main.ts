import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from 'src/pipes/validation.pipe'

async function start() {
  const PORT = process.env.PORT || 5002
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Урок по продвинутому BACKEND')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('niksolid')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port =${PORT}`))
}

start()
