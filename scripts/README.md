# FERC Story Docker Scripts

Удобные скрипты для управления Docker контейнерами проекта FERC Story.

## 📁 Структура папок

```
scripts/
├── dev/                    # Development скрипты
│   ├── start.bat          # Запуск development
│   ├── stop.bat           # Остановка development
│   ├── restart.bat        # Перезапуск development
│   ├── logs.bat           # Логи development
│   └── clean.bat          # Очистка development
├── prod/                   # Production скрипты
│   ├── start.bat          # Запуск production
│   ├── stop.bat           # Остановка production
│   ├── restart.bat        # Перезапуск production
│   ├── logs.bat           # Логи production
│   └── clean.bat          # Очистка production
├── utils/                  # Утилиты
│   ├── status.bat         # Статус контейнеров
│   ├── clean-all.bat      # Полная очистка
│   ├── rebuild.bat        # Пересборка образов
│   └── backup.bat         # Резервное копирование БД
├── start-dev.bat          # Быстрый запуск development
├── start-prod.bat         # Быстрый запуск production
└── stop-all.bat           # Остановка всех окружений
```

## 🚀 Development Scripts (Разработка)

| Скрипт | Описание |
|--------|----------|
| `dev/start.bat` | Запустить development окружение с hot reload |
| `dev/stop.bat` | Остановить development окружение |
| `dev/restart.bat` | Перезапустить development окружение |
| `dev/logs.bat` | Показать логи development окружения |
| `dev/clean.bat` | Очистить development окружение |

## 🏭 Production Scripts (Продакшен)

| Скрипт | Описание |
|--------|----------|
| `prod/start.bat` | Запустить production окружение в фоне |
| `prod/stop.bat` | Остановить production окружение |
| `prod/restart.bat` | Перезапустить production окружение |
| `prod/logs.bat` | Показать логи production окружения |
| `prod/clean.bat` | Очистить production окружение |

## 🛠️ Utility Scripts (Утилиты)

| Скрипт | Описание |
|--------|----------|
| `utils/status.bat` | Показать статус всех контейнеров |
| `utils/clean-all.bat` | Очистить все окружения и неиспользуемые ресурсы |
| `utils/rebuild.bat` | Пересобрать все Docker образы |
| `utils/backup.bat` | Создать резервную копию базы данных |

## Быстрый старт

### Windows (PowerShell/CMD)
```bash
# Development
.\scripts\start-dev.bat
# или
.\scripts\dev\start.bat

# Production
.\scripts\start-prod.bat
# или
.\scripts\prod\start.bat
```

### Linux/macOS/WSL
```bash
# Сначала установите права выполнения
chmod +x scripts/setup.sh
./scripts/setup.sh

# Development
./scripts/start-dev.sh
# или
./scripts/dev/start.sh

# Production
./scripts/start-prod.sh
# или
./scripts/prod/start.sh
```

## Порты

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

## Полезные команды

### Windows
```bash
# Просмотр логов
.\scripts\dev\logs.bat

# Остановка всех сервисов
.\scripts\stop-all.bat

# Полная очистка
.\scripts\utils\clean-all.bat
```

### Linux/macOS/WSL
```bash
# Просмотр логов
./scripts/dev/logs.sh

# Остановка всех сервисов
./scripts/stop-all.sh

# Полная очистка
./scripts/utils/clean-all.sh
```
