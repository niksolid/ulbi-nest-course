## STEP 1 
Создаем структуру без БД, смотрим как пишутся роуты через файлы 
app.service и app.controller

## STEP 2
Подключаем БД postrgesql

Описываем SequelizeModule.forRoot

Удаляем app.service и app.controller (я переместил в .temp)

Создаем папку users, с помощью nest cli мы можем сгенерировать модуль автоматически прописав команду в консоли:

```bash
nest generate module users   
```

Так же создадим контроллер и сервис:
```bash
nest generate controller users   
nest generate service users   
```

## STEP 3
Устанавливаем  @nestjs/config и в app.module.ts подключаем ConfigModule
Конфигурируем .env файлы