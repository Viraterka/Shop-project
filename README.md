# Shop UI

Учебное приложение на **React и TypeScript** для работы со справочниками магазинов, клиентов и товаров.

Проект развивается по заданиям 2.1–2.5. Каждое задание сохранено отдельной веткой; ветка `main` содержит последнюю версию — **2.5**.

## Текущая версия: 2.3

Каркас Ant Design: Header, Content, Footer и горизонтальное меню.

## Задания

| Задание | Содержание | Ветка |
| :--- | :--- | :--- |
| 2.1 | Начальная структура React-приложения и страницы списков клиентов, товаров и магазинов. | [task-2.1](https://github.com/Viraterka/Shop-project/tree/task-2.1) |
| 2.2 | Маршруты React Router, вложенные страницы, Outlet и навигация через NavLink. | [task-2.2](https://github.com/Viraterka/Shop-project/tree/task-2.2) |
| 2.3 | Каркас Ant Design: Header, Content, Footer и горизонтальное меню. | [task-2.3](https://github.com/Viraterka/Shop-project/tree/task-2.3) |
| 2.4 | Единый реестр Routings, маршруты справочников и пункт «Домой». | [task-2.4](https://github.com/Viraterka/Shop-project/tree/task-2.4) |
| 2.5 | Иконки Ant Design и переходы к просмотру, созданию и редактированию товаров, клиентов и магазинов. | [task-2.5](https://github.com/Viraterka/Shop-project/tree/task-2.5) |

История восстановлена из сохранённых локальных проектов: версии идут последовательно от 2.1 до 2.5.

## Запуск

Потребуются Node.js 22.22 или новее и npm.

```bash
git clone https://github.com/Viraterka/Shop-project.git
cd Shop-project
npm ci
npm run dev
```

Откройте адрес из терминала. Обычно это [localhost:3000](http://localhost:3000).

Для запуска определённого задания переключите ветку и установите его зависимости:

```bash
git switch task-2.3
npm ci
npm run dev
```

## Команды

| Команда | Действие |
| :--- | :--- |
| `npm run dev` | Запуск сервера разработки |
| `npm run build` | Сборка приложения в папку `dist` |
| `npm run preview` | Просмотр готовой сборки |
| `npm run check` | Проверка и исправление кода с помощью Biome |
| `npm run format` | Форматирование кода |

## Структура

```text
public/             Статические файлы
src/
  pages/            Страницы приложения
  App.tsx           Основной компонент приложения
  App.css           Общие стили
  index.tsx         Точка входа
rsbuild.config.ts   Настройки сборки
```

## Технологии

React · TypeScript · Rsbuild · Biome · React Router · Ant Design

Исходный код и lock-файл хранятся в Git. Папки `node_modules` и `dist`, локальные настройки и служебные файлы исключены из репозитория.
