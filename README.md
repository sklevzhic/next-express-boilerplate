# FERC Story

Full-stack приложение на TypeScript с Next.js и Express.js.

Demo


https://github.com/user-attachments/assets/080040c2-4b3e-4372-ae21-50e35446e3f3



## 🚀 Быстрый старт

### Development

```bash
# 1. Поднять PostgreSQL (если SQLite можно не поднимать, по дефолту SQLite)
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

