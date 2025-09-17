# Frontend Boilerplate

Современный frontend boilerplate на основе Next.js с TypeScript и Feature-Sliced Design архитектурой.

## 🚀 Технологии

### Core
- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Статическая типизация
- **React 19** - Библиотека для создания пользовательских интерфейсов

### Styling & UI
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Shadcn/ui** - Современные UI компоненты
- **Lucide React** - Иконки
- **Tailwind Animate** - Анимации

### Forms & Validation
- **React Hook Form** - Управление формами
- **Zod** - Валидация схем
- **@hookform/resolvers** - Интеграция валидации

### State Management
- **TanStack Query** - Управление серверным состоянием
- **TanStack Query Devtools** - Инструменты разработчика

### Architecture & Code Quality
- **Feature-Sliced Design** - Архитектурная методология
- **ESLint** - Линтинг кода
- **Prettier** - Форматирование кода
- **TypeScript ESLint** - Линтинг TypeScript
- **Husky** - Git hooks
- **Commitlint** - Проверка коммитов
- **Lint-staged** - Линтинг staged файлов

## 🛠 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

### Сборка для продакшена

```bash
npm run build
npm start
```

## 📁 Архитектура

Проект использует **Feature-Sliced Design** методологию:

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   └── routes/            # Маршруты приложения
├── shared/                # Переиспользуемые ресурсы
│   ├── ui/               # UI компоненты
│   ├── lib/              # Утилиты и хелперы
│   └── config/           # Конфигурация
├── entities/             # Бизнес-сущности
│   └── message/          # Сущность сообщений
├── features/             # Функциональные возможности
│   ├── message-form/     # Форма сообщений
│   └── error-handling/   # Обработка ошибок
└── widgets/              # Крупные UI блоки (если нужны)
```

## 🔧 Доступные скрипты

```bash
# Разработка
npm run dev              # Запуск dev сервера с Turbopack
npm run build            # Сборка для продакшена
npm run start            # Запуск production сервера

# Линтинг и форматирование
npm run lint             # ESLint + Prettier (с автоисправлением)
npm run lint:check       # Только проверка без исправлений
npm run lint:ci          # Строгая проверка для CI/CD
npm run format           # Форматирование всех файлов
npm run format:check     # Проверка форматирования

# TypeScript
npm run typecheck        # Проверка типов

# Стили
npm run stylelint        # Проверка CSS/SCSS
npm run stylelint:fix    # Автоисправление стилей

# Git hooks
npm run prepare          # Установка Husky hooks
```

## 🎨 UI Компоненты

Проект использует **Shadcn/ui** компоненты:

- `Button` - Кнопки
- `Input` - Поля ввода
- `Label` - Метки
- `Form` - Формы
- `Header` - Шапка приложения

Все компоненты находятся в `src/shared/ui/` и могут быть легко кастомизированы.

## 🔄 Управление состоянием

### Серверное состояние
Используется **TanStack Query** для:
- Кэширования API запросов
- Синхронизации данных
- Оптимистичных обновлений
- Retry логики

### Локальное состояние
- **React Hook Form** для форм
- **useState/useReducer** для простого состояния
- **Context API** для глобального состояния (если нужно)

## 📝 Переменные окружения

Создайте файл `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🚀 Особенности

- **App Router** - Современная маршрутизация Next.js
- **Server Components** - Рендеринг на сервере
- **TypeScript Strict Mode** - Строгая типизация
- **Hot Reload** - Быстрая перезагрузка при изменениях
- **Turbopack** - Быстрая сборка в dev режиме
- **Tree Shaking** - Оптимизация размера бандла
- **ESLint Boundaries** - Контроль импортов между слоями

## 📖 Полезные ссылки

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 🛠 Разработка

### Добавление новых компонентов

1. Создайте компонент в соответствующем слое FSD
2. Экспортируйте через `index.ts` файл
3. Следуйте принципам Feature-Sliced Design

### Стилизация

- Используйте Tailwind CSS классы
- Для сложных стилей создавайте кастомные компоненты
- Следуйте дизайн-системе Shadcn/ui

### Типизация

- Всегда типизируйте props компонентов
- Используйте строгие типы для API
- Экспортируйте типы через `index.ts`