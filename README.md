# Рисование на Canvas с использованием TypeScript

Этот проект представляет собой тестовое задание для позиции разработчика с навыками TypeScript. Цель — реализовать программу, которая преобразует входные данные (два прямоугольника и точки соединения) в набор точек для рисования ломаной линии, соединяющей прямоугольники с использованием Canvas API.

## Содержание
- [Функциональные возможности](#функциональные-возможности)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Установка](#установка)
- [Использование](#использование)
- [Тестирование](#тестирование)
- [Подробности реализации](#подробности-реализации)

## Функциональные возможности
- Решение на базе TypeScript, которое преобразует входные данные в графические элементы.
- Рисование на Canvas: Отрисовка прямоугольников и соединяющей их ломаной линии на основе преобразованных данных.
- Обработка ошибок для недопустимых входных данных, таких как неверно расположенные точки соединения или углы.
- Юнит-тесты: Использование Jest для тестирования основного алгоритма преобразования данных.

## Технологии
- TypeScript
- React
- HTML5 Canvas API
- Jest (для тестирования)

## Структура проекта
```bash
src/
│
├── components/
│   └── CanvasComponent.tsx     # Компонент для отрисовки Canvas с прямоугольниками и ломаной линией
├── tests/
│   ├── CanvasComponent.test.tsx  # Юнит-тесты для CanvasComponent
│   └── dataConverter.test.ts     # Юнит-тесты для алгоритма преобразования данных
├── types/
│   └── shapes.ts                # Определение типов (Point, Rect, ConnectionPoint)
├── utils/
│   └── dataConverter.ts         # Функция для преобразования входных данных в точки
├── App.tsx                      # Главный файл приложения
└── index.tsx                    # Точка входа в приложение

```

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ykrrop/canvas-ts
   cd your-repo
   ```
2. Установите зависимости
```bash
npm install
```

3. Запустите сервер разработки
```bash
npm run dev
```
4. Откройте бразуер и перейдите по адресу http://localhost:3000

## Использование

### Запуск приложения

После запуска сервера разработки приложение отобразит два прямоугольника на Canvas, а также ломаную линию, соединяющую их в соответствии с заданными точками соединения.

Вы можете изменить входные данные в файле App.tsx, где определены rect1, rect2, cPoint1 и cPoint2:

```typescript
const rect1: Rect = {
  position: { x: 100, y: 100 },
  size: { width: 100, height: 50 },
};

const rect2: Rect = {
  position: { x: 300, y: 300 },
  size: { width: 100, height: 50 },
};

const cPoint1: ConnectionPoint = {
  point: { x: 100, y: 125 },
  angle: 90,
};

const cPoint2: ConnectionPoint = {
  point: { x: 300, y: 275 },
  angle: 90,
};
```

После изменения координат и углов Canvas автоматически обновится, отображая новые позиции и соединения.

## Тестирование

Проект включает юнит-тесты как для компонента CanvasComponent, так и для функции dataConverter.

1. Запуск тестов:
```bash
npm run test
```

**Покрытие тестами**
 • CanvasComponent: Тесты проверяют корректность рендеринга Canvas и вызов соответствующих методов API.
 • dataConverter: Тесты проверяют правильное преобразование входных данных и обработку пограничных случаев, таких как недопустимые точки соединения.

```typescript
// Пример теста для dataConverter
it("должен возвращать массив точек для корректных точек соединения", () => {
  const points = dataConverter(rect1, rect2, validCPoint1, validCPoint2);
  expect(points.length).toBe(4);
});
```

## Подробности реализации

### Преобразование данных

Основная функция, dataConverter, отвечает за преобразование входных данных (прямоугольников и точек соединения) в массив точек, которые затем используются для рисования ломаной линии:

```typescript
export const dataConverter = (
  rect1: Rect,
  rect2: Rect,
  cPoint1: ConnectionPoint,
  cPoint2: ConnectionPoint
): Point[] => {
  // Алгоритм преобразования прямоугольников и точек соединения в массив точек
};
```
- Прямоугольники определяются их центральной точкой (position) и размерами (width, height).
- Точки соединения расположены на краях прямоугольников, и алгоритм гарантирует, что ломаная линия избегает наложений и выбирает кратчайший путь, избегая резких разворотов на 180 градусов.

### Обработка ошибок

Функция dataConverter выбрасывает описательные ошибки в случаях, когда:

• Точка соединения не расположена на краю прямоугольника.
• Угол не перпендикулярен краю и не направлен наружу.

### Отрисовка на Canvas

Компонент CanvasComponent использует HTML5 Canvas API для рисования двух прямоугольников и ломаной линии, соединяющей их. Логика отрисовки реализована внутри хука useEffect, чтобы реагировать на изменения входных данных.



