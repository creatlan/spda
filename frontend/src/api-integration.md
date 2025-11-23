# WorkPlan - Backend API Integration

## Обзор
Этот документ описывает все места в коде, где необходимо подключить backend API.

## API Endpoints

### 1. Shifts (Смены)

#### GET /api/shifts
Получить все смены пользователя за месяц

**Параметры запроса:**
```
?month=10&year=2024
```

**Ответ:**
```typescript
{
  shifts: {
    [date: string]: 'day' | 'night';
    // Пример:
    '2024-10-15': 'day',
    '2024-10-16': 'night',
    '2024-10-18': 'day'
  },
  stats: {
    total: 9,
    day: 5,
    night: 4
  },
  earnings: {
    total: 973,
    today: 173
  }
}
```

**Где используется:**
- `pages/Home.tsx` (строка 19-22)

---

#### POST /api/shifts/find-replacement
Найти замену на смену

**Тело запроса:**
```typescript
{
  date: '2024-11-22',
  time: 'evening', // 'morning' | 'evening'
  shiftStart: '15:00',
  shiftEnd: '21:00'
}
```

**Ответ:**
```typescript
{
  success: boolean,
  replacementFound: boolean,
  message: string
}
```

**Где используется:**
- `pages/Home.tsx` (строка 108)
- `pages/Availability.tsx` (строка 145)

---

### 2. Availability (Занятость)

#### GET /api/availability
## API Integration — объединённая документация

Ниже объединённая и вычищенная версия двух существующих документов `api-integration.md`.
Она покрывает базовый URL, аутентификацию, все используемые endpoints, формат ответов, примеры запросов и TODO для интеграции.

---

## Base URL

По умолчанию используйте переменную окружения (пример):

```
https://api.workplan.example.com/v1
```

## Authentication

Все защищённые запросы требуют заголовок Bearer токена:

```
Authorization: Bearer {token}
```

---

## Endpoints (обзор)

1) История смен
2) Смены (календарь, следующая, поиск замены)
3) Статистика текущего месяца
4) Занятость (availability)
5) График (schedule)
6) Профиль и аутентификация

Ниже — подробности по каждому из них.

---

### 1. История смен

#### GET /api/history/all-time
Возвращает общую статистику пользователя за всё время.

Response:
```json
{
  "totalShifts": 30,
  "totalHours": 240,
  "totalEarnings": 34075,
  "dayShifts": 18,
  "dayHours": 144,
  "dayEarnings": 14075,
  "nightShifts": 12,
  "nightHours": 96,
  "nightEarnings": 14075
}
```

Используется в: `HistoryModal.tsx` — чёрная карточка «Всего».

----

#### GET /api/history/month?month={0-11}&year={YYYY}
Возвращает статистику и список смен за указанный месяц.

Response:
```json
{
  "totalShifts": 9,
  "totalHours": 72,
  "totalEarnings": 24075,
  "dayShifts": 5,
  "dayHours": 40,
  "dayEarnings": 14075,
  "nightShifts": 4,
  "nightHours": 32,
  "nightEarnings": 14000,
  "shifts": [
    { "date": "01.11.2024", "type": "day", "hours": 6, "earnings": 4075 },
    { "date": "03.11.2024", "type": "day", "hours": 6, "earnings": 1075 },
    { "date": "04.11.2024", "type": "night", "hours": 6, "earnings": 4075 }
  ]
}
```

Используется в: `HistoryModal.tsx` — белая карточка месяца + список смен.

---

### 2. Смены (календарь)

#### GET /api/shifts?month={0-11}&year={YYYY}
Возвращает смены пользователя для календаря (ключи — даты в формате YYYY-MM-DD или YYYY-M-D).

Response пример:
```json
{
  "2024-10-15": "day",
  "2024-10-16": "night",
  "2024-10-17": "day"
}
```

Формат: Key — `"YYYY-M-D"`, Value — `"day" | "night" | null`.

Используется в: `pages/Home.tsx` — иконки смен в календаре.

----

#### GET /api/shifts/next
Информация о следующей предстоящей смене.

Response:
```json
{
  "date": "08.11.2024",
  "startTime": "15:00",
  "endTime": "21:00",
  "type": "night",
  "position": "Официант"
}
```

Используется в: `Home.tsx` — карточка «Следующая смена».

----

#### POST /api/shifts/find-replacement
Запрос на поиск замены для смены.

Request body:
```json
{ "shiftId": "shift-123", "reason": "Не могу выйти" }
```

Response:
```json
{ "success": true, "message": "Запрос на замену отправлен", "requestId": "request-456" }
```

Используется в: `Home.tsx` и `ConfirmModal` (кнопка «Найти замену»).

---

### 3. Статистика текущего месяца

#### GET /api/stats/current-month
Краткая статистика для карточек на главной.

Response:
```json
{ "totalShifts": 9, "dayShifts": 5, "nightShifts": 4, "totalEarnings": 973, "todayEarnings": 173 }
```

Используется в: `Home.tsx` — карточки статистики.

---

### 4. Занятость (Availability)

#### GET /api/availability?startDate={YYYY-MM-DD}&days={N}
Возвращает статусы занятости на N дней вперед.

Response пример:
```json
{
  "2024-11-23": { "morning": "free", "afternoon": "inconvenient", "evening": "unavailable" },
  "2024-11-24": { "morning": "shift-day", "afternoon": "free", "evening": "shift-evening" }
}
```

Значения статусов: `null`, `free`, `inconvenient`, `unavailable`, `shift-day`, `shift-evening`.

Используется в: `pages/Availability.tsx`.

----

#### PUT /api/availability
Обновление статуса занятости.

Request body:
```json
{ "date": "2024-11-23", "timeSlot": "morning", "status": "free" }
```

Response:
```json
{ "success": true, "message": "Статус обновлен" }
```

Используется в: `Availability.tsx` (контекстное меню).

---

### 5. График смен (Schedule)

#### GET /api/schedule/day?date={YYYY-MM-DD}
Возвращает расписание всех сотрудников на выбранный день.

Response (пример):
```json
{
  "date": "2024-11-23",
  "shifts": {
    "morning": [ { "staffId": "staff-1", "name": "Иван Иванов", "position": "Официант", "startTime": "09:00", "endTime": "15:00" } ],
    "evening": [ { "staffId": "staff-3", "name": "Петр Сидоров", "position": "Официант", "startTime": "15:00", "endTime": "21:00" } ]
  }
}
```

Используется в: `pages/Schedule.tsx`.

---

### 6. Профиль и аутентификация

#### GET /api/profile
Возвращает данные текущего пользователя.

Response пример:
```json
{ "userId": "user-123", "name": "Иван Иванов", "position": "Официант", "email": "ivan@example.com", "phone": "+7 (999) 123-45-67" }
```

Используется в: `Profile.tsx`.

----

#### PUT /api/profile
Обновление данных профиля.

Request body (пример):
```json
{ "name": "Иван Иванов", "position": "Хостес" }
```

Response (пример):
```json
{ "success": true, "message": "Профиль обновлен", "profile": { "userId": "user-123", "name": "Иван Иванов", "position": "Хостес", "email": "ivan@example.com", "phone": "+7 (999) 123-45-67" } }
```

----

#### POST /api/auth/logout
Выход из системы.

Response:
```json
{ "success": true, "message": "Выход выполнен" }
```

Используется в: `Profile.tsx` (handleLogout).

---

## Error Handling и коды ответа

Формат ошибок:
```json
{ "success": false, "error": { "code": "ERROR_CODE", "message": "Описание ошибки" } }
```

Основные HTTP коды:
- 200 — OK
- 400 — Bad Request (валидация)
- 401 — Unauthorized
- 403 — Forbidden
- 404 — Not Found
- 500 — Internal Server Error

---

## Примеры использования (в коде)

GET пример (fetch):
```typescript
const fetchMonthHistory = async (month: number, year: number) => {
  const response = await fetch(`/api/history/month?month=${month}&year=${year}`, {
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
  });
  if (!response.ok) throw new Error('Failed to fetch history');
  return response.json();
};
```

POST пример (fetch):
```typescript
const requestReplacement = async (shiftId: string, reason: string) => {
  const response = await fetch('/api/shifts/find-replacement', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ shiftId, reason })
  });
  if (!response.ok) throw new Error('Failed to request replacement');
  return response.json();
};
```

---

## Статусы занятости и цветовая схема (UI)

Тип статуса:
```ts
type AvailabilityStatus = null | 'free' | 'inconvenient' | 'unavailable' | 'shift-day' | 'shift-evening';
```

Цвета (примеры переменных):
```css
:root {
  --background-dark: #2D2D2D;
  --gray-heavy: #D1D1D6;
  --gray-light: #F2F2F7;
  --gray-medium: #E5E5EA;
  --white: #FFFFFF;
  --green: #34C759;
  --red: #FF3B30;
}
```

---

## TODO: интеграция с реальным backend

Необходимо:
1. Раскомментировать TODO в коде и заменить mock-данные на реальные вызовы.
2. Добавить обработку ошибок и loading-состояний.
3. Настроить передачу токена авторизации (JWT) и безопасное хранение.
4. Настроить retry/timeout логику для нестабильных запросов.
5. Вынести `baseURL` в environment variables (`.env`).

Файлы с TODO-комментариями (ориентировочно):
- `HistoryModal.tsx` — строки с TODO
- `Home.tsx` — строки 17-25, 103-104
- `Availability.tsx` — TODO: добавить вызовы API
- `Schedule.tsx` — TODO: добавить useEffect для загрузки
- `Profile.tsx` / `ProfileEdit.tsx` — TODO: подключить GET/PUT

---

Если нужно, могу:
- добавить примеры интеграции через `fetch`/`axios`/RTK Query;
- создать небольшую обёртку `apiClient` с обработкой ошибок и автоматической подстановкой `baseURL` и `Authorization`;
- вынести типы интерфейсов TypeScript для ответов в `src/types/api.ts`.
