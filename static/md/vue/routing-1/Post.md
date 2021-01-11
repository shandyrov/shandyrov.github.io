# Vue 3 практика: Изучаем Vue Router.

В этой статье мы рассмотрим новый маршрутизатор Vue Router, использующий Vue 3.
Есть несколько небольших отличий от Vue 2, по ходу создания тестового приложения мы рассмотрим их.
Мы затроним следующие темы:

- Создание проекта с нуля
- Основы Vue Router
- Установка с помощью Vue CLI
- Именованные маршруты
- Динамические сегменты
- Обработка ошибок 404: Not Found

## 1.Создание проета с нуля.

Создадим базовое приложение Vue 3 с помощью Vue CLI.
Из командной строки мне понадобится самая последняя версия интерфейса командной строки. Ты можешь сделать
это, запустив:

```sh
npm install -g @vue/cli
```

Далее создадим базовое приложение:

```sh
vue create app
```

Выбираем "Vue 3 Preview"

Это создаст базовое приложение. Перейдем в папку проекта и запустим наше приложение:

```sh
cd app
npm run serve
```

Откройте в браузере адрес:: <a class="link-1" href="http://localhost:8080" target="_blank">localhost:8080</a>
![Vue App](/static/md/vue/routing-1/vueApp.png)

## 2.Vue Router основы

Для установки Vue Router в наш базовый проект Vue 3 которую мы создали выше, выполним следующие шаги:

Установим маршрутизатор Vue 3 из командной строки.

```sh
$ npm i vue-router@next
```

Добавьте каталог маршрутизации и файл конфигурации `/router/index.js`

```js
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
```

Обратите внимание, что мы создаем наши маршруты в массиве, где мы указываем для каждого маршрута несколько важных
свойств

path - URL-путь, по которому можно найти этот маршрут.
name - необязательное имя для использования при ссылке на этот маршрут.
component - какой компонент загружать при вызове этого маршрута.

Ниже массива мы создаем сам маршрутизатор, используя маршруты, а также передаем
в createWebHistory. Это используется для переключения из режима хеширования в режим истории внутри
в вашем браузере, используя API истории HTML5. То, как мы это настраиваем, немного отличается от того, что мы делали
в Vue 2.

## 3.Использование Vue Router

Теперь нам нужно отредактировать наш файл main.js, чтобы использовать наш маршрутизатор в нашем приложении.
/src/main.js

```js
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
createApp(App).use(router).mount("#app");
```

Способ создания приложения в Vue 3 изменился, сначала мы должны импортировать файл нашего маршрутизатора, а затем использовать маршрутизатор при создании нашего приложения.

## 4. Использование <router-view> и <router-link>

Нам доступны две директивы для использования в шаблоне:

<router-view/> - Когда в браузере осуществляется навигация по маршруту, именно здесь отображается компонент соответствующий данному маршруту. Например, в нашем коде / будет отображаться компонент Home, в котором мы
есть список <router-view />.
Компоненты внутри <router-view> также могут содержать в шаблоне собственный <router-view>.

Все остальные входные параметры передаются в отображаемый компонент, однако данные маршрута удобнее получать из $route.params текущего маршрута.

<router-link> - это директива, которую мы используем для создания ссылок между нашими различными страницами компонентов вместо использования <a href> например:
Обновом файл App.vue:

```js
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О нас</router-link>
    </div>
    <router-view />
  </div>
</template>
```

Нам нужно будет создать компоненты Home и About, на которые мы ссылались выше. Удобнее всего хранить эти компоненты в папке views:
/src/views/Home.vue

```js
<template>
  <h1>Главная страница</h1>
</template>
```

/src/views/About.vue

```js
<template>
  <h1>О нас</h1>
</template>
```

И напоследок запустим наш сервер и перейдем по адресу: <a class="link-1" target="_blank" href="localhost:8080">localhost:8080</a>:

![Home](/static/md/vue/routing-1/images/Home.jpg)
![About](/static/md/vue/routing-1/images/About.jpg)