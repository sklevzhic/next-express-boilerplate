# Backend Boilerplate

Современный backend boilerplate на основе Express.js с TypeScript, Prisma ORM и PostgreSQL.

## 🚀 Технологии

### Core
- **Express.js** - Минималистичный веб-фреймворк для Node.js
- **TypeScript** - Статическая типизация
- **Node.js** - JavaScript runtime

### Database & ORM
- **Prisma** - Современный ORM для TypeScript
- **PostgreSQL** - Реляционная база данных
- **@prisma/client** - Prisma клиент для работы с БД

### Validation & Documentation
- **Zod** - Валидация схем данных
- **Swagger JSDoc** - Генерация API документации
- **Swagger UI Express** - UI для API документации

### Middleware & Security
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Загрузка переменных окружения

### Development Tools
- **tsx** - TypeScript execution для разработки
- **TypeScript** - Компилятор TypeScript
- **ESLint** - Линтинг кода
- **Prettier** - Форматирование кода

## 🛠 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Настройка базы данных

1. Создайте файл `.env.local` на основе `env.example`:

```env
PORT=3001
NODE_ENV=development
CLIENT_URL=http://localhost:3000
DATABASE_URL="postgresql://user:password@localhost:5432/ferc_story"
```

2. Инициализируйте базу данных:

```bash
npm run db:push
```

## 🚀 Запуск приложения

### Development режим

#### Вариант 1: Локальный запуск (рекомендуется для разработки)

```bash
# Установка зависимостей
npm install

# Настройка переменных окружения
cp env.example .env.local
# Отредактируйте .env.local под ваши настройки

# Инициализация базы данных
npm run db:push

# Запуск в режиме разработки
npm run dev
```

API будет доступно по адресу: http://localhost:3001

#### Вариант 2: Docker Compose (для полного стека)

```bash
# Запуск всего стека (frontend + backend + database)
cd ../
docker-compose -f docker-compose.dev.yml up

# Или только backend
docker-compose -f docker-compose.dev.yml up server
```

### Production режим

#### Вариант 1: Локальная сборка

```bash
# Установка зависимостей
npm install

# Настройка переменных окружения для продакшена
cp env.example .env.local
# Установите NODE_ENV=production и другие production настройки

# Сборка приложения
npm run build

# Запуск production сервера
npm start
```

#### Вариант 2: Docker Compose (рекомендуется для продакшена)

```bash
# Запуск всего стека в production режиме
cd ../
docker-compose -f docker-compose.yml up -d

# Или только backend
docker-compose -f docker-compose.yml up -d server
```

#### Вариант 3: Docker (только backend)

```bash
# Сборка Docker образа
docker build -t fercstory-server .

# Запуск контейнера
docker run -p 3001:3001 \
  -e NODE_ENV=production \
  -e DATABASE_URL="postgresql://user:password@host:5432/ferc_story" \
  fercstory-server
```

## 📁 Архитектура

Проект следует принципам чистой архитектуры:

```
src/
├── index.ts              # Точка входа приложения
├── app.ts               # Конфигурация Express приложения
├── config/              # Конфигурационные файлы
│   ├── app.ts          # Основная конфигурация
│   ├── prisma.ts       # Конфигурация Prisma
│   └── swagger.ts      # Конфигурация Swagger
├── routes/              # API маршруты
│   └── messages.ts     # Маршруты для сообщений
├── controllers/         # Контроллеры (обработчики запросов)
│   └── messageController.ts
├── services/            # Бизнес-логика
│   └── messageService.ts
├── models/              # Модели данных
│   └── Message.ts
├── middleware/          # Middleware функции
│   ├── cors.ts         # CORS настройки
│   └── errorHandler.ts # Обработка ошибок
├── types/               # TypeScript типы
│   └── index.ts
└── utils/               # Утилиты
    ├── logger.ts       # Логирование
    └── validation.ts   # Валидация
```

## 🔧 Доступные скрипты

```bash
# Разработка
npm run dev              # Запуск в dev режиме с hot reload
npm run build            # Сборка TypeScript
npm run start            # Запуск production сервера
npm run type-check       # Проверка типов TypeScript

# База данных
npm run db:generate      # Генерация Prisma клиента
npm run db:push          # Синхронизация схемы с БД
npm run db:migrate       # Применение миграций
npm run db:studio        # Запуск Prisma Studio
npm run db:seed          # Заполнение БД тестовыми данными
```

## 🗄️ База данных

### Миграции

```bash
# Создание новой миграции
npx prisma migrate dev --name migration_name

# Применение миграций в продакшене
npx prisma migrate deploy
```

## 📚 API Документация

Swagger документация доступна по адресу: http://localhost:3001/api-docs

## 🔒 Middleware

### CORS
Настроен для работы с фронтендом на `http://localhost:3000`

### Error Handling
Централизованная обработка ошибок с детальными сообщениями

### Validation
Валидация входящих данных с помощью Zod схем

## 📝 Переменные окружения

### Обязательные переменные

```env
PORT=3001                           # Порт сервера
NODE_ENV=development                # Окружение
CLIENT_URL=http://localhost:3000    # URL фронтенда для CORS
DATABASE_URL="postgresql://..."     # Строка подключения к БД
```

## 🚀 Особенности

- **Type Safety** - Полная типизация с TypeScript
- **Clean Architecture** - Разделение на слои (routes, controllers, services)
- **Database First** - Prisma ORM с миграциями
- **API Documentation** - Автоматическая генерация Swagger документации
- **Error Handling** - Централизованная обработка ошибок
- **Validation** - Валидация данных с Zod
- **Hot Reload** - Быстрая перезагрузка при изменениях
- **Production Ready** - Готовность к продакшену

## 🛠 Разработка

### Добавление новых эндпоинтов

1. Создайте контроллер в `controllers/`
2. Добавьте сервис в `services/`
3. Создайте маршрут в `routes/`
4. Зарегистрируйте маршрут в `app.ts`
5. Добавьте типы в `types/`

### Работа с базой данных

1. Обновите схему в `prisma/schema.prisma`
2. Создайте миграцию: `npm run db:migrate`
3. Сгенерируйте клиент: `npm run db:generate`

### Логирование

Используйте встроенный логгер:

```typescript
import { logger } from '../utils/logger';

logger.info('Info message');
logger.error('Error message');
```