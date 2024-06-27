# posts-project

Проект предназначен для просмотра постов. В проекте реализованы такие страницы как:
- Sign-In: Страница входа пользователя.
- Sign-Up: Страница регистрации нового пользователя.
- Feed: Главная страница с лентой постов.
- Content: Страница с детальной информацией о посте.
- Profile/Posts: Страница профиля пользователя с его постами.

Страница Sign-In:
- Логин Пароль для входа в систему (admin admin)
- Реализован просмотр и скытие пароля (Show/Hide)
- Есть не большая валидация при некорректном Логина или Пароля

Страница Feed:
- Реализован моковые данные для постов.
- При клике на определенный пост открывается страница Content с детальной информацией о посте
- Кнопка назад
- Реализован футер навигация по страницам

Странца Profile/Posts:
- Реализован отдельные моковые данные для постов пользователя.
- Можно переключаться между страницами Posts и Photos c помощью сегмента контроля
- Выход из аккаунта (Logout)
- Реализован футер навигация по страницам


# Список использованных технологии:
- Vue 3
- vue-router
- TypeScript
- Composition API
- Sass (SCSS)
- Pinia

Дополнительно для улучшения качества кода и устранения типичных ошибок были использованы следующие технологии:
- husky
- pre-commit hooks
- eslint
- prettier
  

# Реализованы следующие функциональные требовании:
- Основные компоненты интерфейса, согласно макету в Figma
- Настроика маршрутизации с использованием vue-router
- Управление состоянием с использованием Pinia
- Адаптивная приложения и корректное отображения на различных устройствах

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
