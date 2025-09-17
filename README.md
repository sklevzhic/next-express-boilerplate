# FERC Story

Full-stack приложение на TypeScript с Next.js и Express.js.

## 🚀 Быстрый старт

### Development

```bash
# 1. Поднять PostgreSQL
cd ../
.\scripts\utils\start-postgres.bat

# 2. Backend
cd server
npm install
copy env.example .env.local
npm run db:push
npm run dev

# 3. Frontend (в другом терминале)
cd client
npm install
npm run dev
```

### Production

```bash
# Запуск production
.\scripts\start-prod.bat
```

## 📁 Структура

```
FERCStroy/
├── client/          # Next.js frontend
├── server/          # Express.js backend
└── scripts/         # Docker скрипты
```

## 🔗 Доступ

- **[Frontend](http://localhost:3000)** - Next.js приложение
- **[Backend](http://localhost:3001)** - Express.js API
- **[Swagger](http://localhost:3001/api-docs)** - API документация

## 📖 Подробная документация

- [Backend README](server/README.md)
- [Скрипты](scripts/README.md)