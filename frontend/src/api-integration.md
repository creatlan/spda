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
Получить статус занятости пользователя

**Параметры запроса:**
```
?startDate=2024-11-01&endDate=2024-11-30
```

**Ответ:**
```typescript
{
  availability: {
    [dateKey: string]: {
      morning: null | 'free' | 'inconvenient' | 'unavailable' | 'shift-day' | 'shift-evening',
      evening: null | 'free' | 'inconvenient' | 'unavailable' | 'shift-day' | 'shift-evening'
    }
  }
}
```

**Где используется:**
- `pages/Availability.tsx` (строка 32-33)

---

#### PUT /api/availability
Обновить статус занятости

**Тело запроса:**
```typescript
{
  date: '2024-11-22',
  time: 'morning', // 'morning' | 'evening'
  status: 'free' // null | 'free' | 'inconvenient' | 'unavailable' | 'shift-day' | 'shift-evening'
}
```

**Ответ:**
```typescript
{
  success: boolean,
  message: string
}
```

**Где используется:**
- `pages/Availability.tsx` (строка 167-169)

---

### 3. Schedule (График)

#### GET /api/schedule
Получить расписание на день со всеми сотрудниками

**Параметры запроса:**
```
?date=2024-11-22
```

**Ответ:**
```typescript
{
  date: '2024-11-22',
  shifts: [
    {
      type: 'morning', // 'morning' | 'evening'
      startTime: '9:00',
      endTime: '15:00',
      positions: {
        waiters: ['Павел Павлов', 'Иван Иванов'],
        runners: ['Павел Павлов'],
        kitchen: ['Павел Павлов', 'Сергей Сергеев']
      }
    },
    {
      type: 'evening',
      startTime: '15:00',
      endTime: '21:00',
      positions: {
        waiters: ['Павел Павлов', 'Иван Иванов'],
        runners: ['Павел Павлов'],
        kitchen: ['Павел Павлов']
      }
    }
  ]
}
```

**Где используется:**
- `pages/Schedule.tsx` (TODO: добавить useEffect для загрузки)

---

### 4. Profile (Профиль)

#### GET /api/profile
Получить данные профиля пользователя

**Ответ:**
```typescript
{
  id: string,
  name: string,
  position: 'Официант' | 'Раннер' | 'Кухня'
}
```

**Где используется:**
- `pages/Profile.tsx` (TODO: добавить useEffect)

---

#### PUT /api/profile
Обновить данные профиля

**Тело запроса:**
```typescript
{
  name?: string,
  position?: 'Официант' | 'Раннер' | 'Кухня'
}
```

**Ответ:**
```typescript
{
  success: boolean,
  message: string
}
```

**Где используется:**
- `pages/Profile.tsx` (строки 16, 22)

---

## Статусы занятости

```typescript
type AvailabilityStatus = null | 'free' | 'inconvenient' | 'unavailable' | 'shift-day' | 'shift-evening';

// null - не отмечено (пустое поле)
// 'free' - Свободен (белый фон, черный текст)
// 'inconvenient' - Неудобно, но могу выйти (светло-серый #F2F2F7, черный текст)
// 'unavailable' - Не могу выйти (серый #E5E5EA, черный текст)
// 'shift-day' - Смена День (темно-серый #D1D1D6, черный текст)
// 'shift-evening' - Смена Вечер (черный #2D2D2D, белый текст)
```

## Цветовая схема

```css
--background-dark: #2D2D2D;    /* Темный фон */
--gray-heavy: #D1D1D6;         /* Серый тяжелый (смена день) */
--gray-light: #F2F2F7;         /* Серый легкий (неудобно) */
--gray-medium: #E5E5EA;        /* Серый средний (не могу) */
--white: #FFFFFF;              /* Белый (свободен) */
--green: #34C759;              /* Зеленый (заработок) */
--red: #FF3B30;                /* Красный (найти замену) */
```

## Следующие шаги для backend интеграции

1. Раскомментировать TODO блоки в коде
2. Заменить demo данные на реальные API вызовы
3. Добавить обработку ошибок и loading состояний
4. Добавить аутентификацию (JWT токены)
5. Настроить CORS для API
