# Next.js Website with Sanity CMS

Сучасний вебсайт побудований на **Next.js** з **Sanity CMS** як headless CMS, готовий до деплойменту на **Vercel**.

## Структура проекту

```
.
├── src/                          # Next.js App Router та компоненти
│   ├── app/                      # Сторінки та layout
│   ├── components/               # React компоненти
│   └── lib/                      # Утиліти та конфігурація
├── sanity/                       # Sanity CMS схеми та конфігурація
│   └── schemaTypes/              # Типи схем (post, author тощо)
├── .env.example                  # Приклад .env змінних
├── .env.local                    # Локальні змінні оточення (не комітити!)
├── vercel.json                   # Конфігурація Vercel
└── package.json                  # Залежності проекту
```

## Встановлення залежностей

```bash
npm install
```

## Налаштування Sanity CMS

1. Перейдіть на [sanity.io](https://sanity.io) та створіть новий проект
2. Отримайте `Project ID` та `Dataset`
3. Заповніть `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-15
SANITY_API_TOKEN=YOUR_API_TOKEN
```

## Запуск локально

### Розробка Next.js (frontend)
```bash
npm run dev
```
Відкрийте [http://localhost:3000](http://localhost:3000)

### Санітарій Studio (CMS)
**Варіант 1 - Вбудована в додаток:**
Відкрийте [http://localhost:3000/gadmin](http://localhost:3000/gadmin)

**Варіант 2 - Окремий dev сервер:**
```bash
npm run dev:sanity
```
Студія буде доступна на [http://localhost:3333](http://localhost:3333)

## Деплой на Vercel

1. **Через GitHub:**
   - Запушіть коду на GitHub
   - Перейдіть на [vercel.com](https://vercel.com)
   - Імпортуйте репозиторій
   - Додайте環境 змінні для Sanity

2. **Встановити секрети в GitHub Actions:**
   - Перейдіть на **Settings → Secrets and variables → Actions**
   - Додайте:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`
     - `SANITY_API_TOKEN`

## Доступні скрипти

- `npm run dev` - Запуск локального сервера розробки
- `npm run dev:sanity` - Запуск Sanity Studio
- `npm run build` - Збірка для продакшену
- `npm start` - Запуск production сервера
- `npm run lint` - Запуск ESLint

## Технологічний стек

- **Next.js 16** - React фреймворк для SSR та SSG
- **React 19** - UI бібліотека
- **TypeScript** - Типізація
- **Tailwind CSS** - CSS фреймворк для стилізації
- **Sanity CMS** - Headless CMS
- **Vercel** - Хостинг та деплой

## Корисні посилання

- [Next.js Документація](https://nextjs.org/docs)
- [Sanity Документація](https://www.sanity.io/docs)
- [Vercel Документація](https://vercel.com/docs)

## GitHub Actions

Налаштовано два workflows:

- **lint.yml** - Автоматична перевірка коду при push на main/develop
- **build.yml** - Автоматична збірка при push на main/develop

## Лікензія

MIT
