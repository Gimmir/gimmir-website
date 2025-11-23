<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Простір готовий для Next.js + Sanity CMS проекту на Vercel

### Estructura проекту

- **Next.js 16** з TypeScript та App Router
- **Sanity CMS** версія 4 для управління контентом
- **Tailwind CSS** для стилізації
- **Vercel конфігурація** для деплойменту
- **GitHub Actions workflows** для CI/CD

### Необхідні дії перед запуском

1. **Встановити Sanity CMS:**
   - Перейти на [sanity.io](https://sanity.io)
   - Створити новий проект
   - Скопіювати `Project ID` та `Dataset`

2. **Заповнити .env.local:**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-11-15
   SANITY_API_TOKEN=YOUR_API_TOKEN
   ```

3. **Запустити локально:**
   ```bash
   npm run dev          # Next.js на http://localhost:3000
   npm run dev:sanity   # Sanity Studio на http://localhost:3333
   ```

### Деплой на Vercel

1. **Через GitHub:**
   - Запушіти коду
   - Імпортувати репозиторій на vercel.com
   - Додати環境 змінні

2. **GitHub Actions Secrets:**
   - Додати у Settings → Secrets:
     - NEXT_PUBLIC_SANITY_PROJECT_ID
     - NEXT_PUBLIC_SANITY_DATASET
     - NEXT_PUBLIC_SANITY_API_VERSION
     - SANITY_API_TOKEN

### Основні файли

- `.env.example` - Шаблон змінних оточення
- `sanity.config.ts` - Конфігурація Sanity CMS
- `src/lib/sanity.client.ts` - Клієнт для запитів
- `sanity/schemaTypes/` - Схеми для Post та Author

### Корисні команди

- `npm run dev` - Локальна розробка
- `npm run build` - Збірка для продакшену
- `npm run lint` - Перевірка коду
