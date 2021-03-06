# Введение в ES6.

ES6 или ECMAScript 2015 - это стандарт спецификации языка ECMAScript, который определяет стандарт для реализации JavaScript.
ECMAScript 2015 является шестым изданием стандарта спецификации языка ECMAScript, который используется при реализации JavaScript. Для запуска кода ES6 в современном браузере мы используем BABEL. BABEL - это transpiler для JavaScript, который позволяет запускать код ES6 в любом браузере.

### Нововведения в ES6

Let vs var:
Одна из самых больших проблем с ключевым словом var заключается в том, что он позволяет перезаписывать значения переменной.

```js
var car = 'Car1'
var car = 'Car2'
console.log(car) //Car2
```

В некоторых случаях, если вы не хотите изменять значение переменной, в этом случае мы используем ключевое слово let. Ключевое слово let в ES6 поддерживает область действия блока, в которой область действия переменной ограничена блоком. В случае, если вы объявляете переменную с ключевым словом var, область действия переменной может быть либо внутри функции, либо глобальной.
Давайте посмотрим пример с ключевыми словами let и var.

```js
var array = []
for (var i = 0; i < 3; i++) {
    array.push(i)
}
console.log(array) // returns [0, 1, 2]
console.log(i) // returns 3
// let array = [];  --> двойное объявление массива
let newarr = []
for (let j = 0; j < 3; j++) {
    newarr.push(j)
}
console.log(newarr) // returns [0, 1, 2]
console.log('value of j' + j) // returns undefined
```

Преимущество использования ключевого слова let это нет повторного объявления переменной и область действия переменной ограничена будет блоком
