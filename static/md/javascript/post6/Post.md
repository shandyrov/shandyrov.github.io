# Руководство по тестированию Jest.

В этим посте я объясню вам доступным языком как начать тестировать с помощь Jest.

Сначала мы погрузимся в разработку, основанную на тестировании, а затем погрузимся в инструмент, который мы собираемся использовать, а именно Jest. И так, что такое разработка через тестирование?

Разработка через тестирование (TDD) вводит столько модульных тестов, сколько производственного кода, чтобы свести количество ошибок к минимому. Он следует принципу RGR или принципу красного, зеленого и рефрактора.

Итак, красный принцип - это начать писать тестовый код, а не думать о реализации производственного кода. Создавайте тестовый код общего назначения в том смысле, что, если производственный код необходимо изменить, тесты можно будет изменить легко и эффективно. В идеале мы хотим писать по одному модульному тесту за раз, а производственный код только для этого модульного теста, а не весь возможный код.

Затем мы перейдем к зеленому принципу или шагу 2. Мы начнем писать весь наш производственный код для этого единичного модульного теста.
Мы напишем производственный код, где он просто обеспечить прохождение этого конкретного теста.
Затем в качестве последнего шага мы проведем рефакторинг кода.

Это удалит любой код, не соответствующий принципам d.r.y, если это возможно, и не нарушит наш код полностью.

Это минимальная информация для объяснения разработки, основанной на тестировании, а теперь давайте приступим к ее реализации.

Сначала создайте React приложение и назовите его calculator:

```javascript
npx create-react-app calculator OR create-react-app calculator
```

Затем создайте папку компонентов и в этой папке создайте папку Calculator и в этой папке создайте файлы Calculator.test.js, Calculator.js и файл Calculator.css. В Create react app по умолчанию включено тестирование jest, но его нельзя настроить, в этом случае вам понадобится webpack.

```js
cd src
mkdir components
cd components
mkdir Calculator
cd Calculator
touch Calculator.js Calculator.test.js Calculator.css
```

Сначала удалите весь код в методе рендеринга, импортируйте компонент Calculator и добавьте его между тегами div.

```js
import React, { Component } from 'react';
//импортирование компонента Calculator
import Calculator from './components/Container/Container';

class App extends Component {
  render() {
    return (
       {/* Удалите весь html из оператора возврата */}
      <div>
        <h2>React Calculator</h2>
        <Calculator />
      </div>
    );
  }
}

export default App;
```

// NEED EDIT
Мы определим 5 элементов для нашего todo-list для руководства, этот элемент - это кейсы, которые мы собираемся протестировать, и писать производственный код для каждого элемента за раз.

1. Фича: сложите 5 и 10, чтобы получить 15

-   Не 50
-   Равно 15
-   Равен 15, если числа менялись местами.

Сомнения: вернет ли он желаемый результат?

2. Фича: вычтите 5 и 10, чтобы получить -5.

-   Не 5
-   Равен -5
-   Не равно -5, если числа менялись местами.

Сомнения: выдаст синтаксическую или ссылочную ошибку, если результат меньше 5

3. Фича: Умножить 5 на 10 получим 50

-   Не 5
-   Равен 50
-   Равен 50 если числа поменять местами.

Сомнения: вернет ли он желаемый результат?

4: Фича: Разделить 200 на 20 чтобы получить 10

-   Не -10
-   Равен 10
-   Не равно 10, если мы поменяем местами числа

Сомнения: вернет ли он десятичную дробь? Нужен ли мне Math.floor?

5. Feature: Check is 80, 5 is a even number
Not odd
Does have a remainder of 0 when divisible by 2.
Does not have a remainder of 1 when divisible by 2.
Doubts: Will it return the intended result? Will the tests pass as intended?