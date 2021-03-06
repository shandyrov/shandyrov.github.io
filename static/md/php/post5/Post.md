# Что нового в PHP 7.4.

Производительность PHP 7.4 лучше, чем в предыдущих версиях

С каждым новым выпуском PHP обычно можно ожидать небольшого увеличения производительности, и этот, раз похоже, не исключение. Эта новейшая версия также предоставляет возможности, которые помогают разработчикам писать более лаконичный код. В этом статье мы рассмотрим ключевые функции PHP 7.4, в том числе:

-   Синтаксические улучшения
-   Улучшение движка
-   Предварительная загрузка класса
-   Интерфейс внешних функций (FFI)
-   Deprecated и другие языковые изменения

### Синтаксические улучшения

PHP 7.4 поддерживает улучшения синтаксиса, включая добавление:

-   Стрелочные функции
-   Распаковка внутри массивов (оператор распространения)
-   Оператор коалесцирующего присваивания
-   Разделитель в числовых литералах

#### Стрелочные функции

В PHP 7.4 вы можете писать короткие замыкания, также известные как стрелочные функции. Они предоставляют сокращенный синтаксис для определения функций. Дополнительная информация:

-   У них может быть только одно выражение.
-   Ключевое слово «return» не допускается.
-   Они могут обращаться к переменным в родительской области без ключевого слова «use».
-   Аргументы и возвращаемые типы могут быть подсказками типа.

Например, вот фрагмент кода, который я написал на PHP 7.3:

```php
<?php

$arr = [1,2,3,4,5];

$newArr = array_map(function($e) {
    return $e * $e;
}, $arr);

print_r(newArr); //[1,4,9,16,25]
?>
```

В PHP 7.4 вы можете написать такой фрагмент:

```php
<?php

$arr = [1,2,3,4,5];
$new_arr = array_map(fn($e) => $e * $e, $arr);

print_r($new_arr); //[1,4,9,16,25]

```

Вот еще один пример кода, написанного с помощью PHP 7.3, без стрелочной функции и с оператором use для получения \$coefficient в области замыкания:

```php
<?php
$coefficient = 2;

$arr = [1,2,3,4,5,6];
$new_arr = array_map(function($e) use ($coefficient) {
    return $e * $e * $coefficient;
}, $arr);

print_r($new_arr); //[2,8,18,32,50,72]

```

Этот код PHP 7.4 дает тот же результат с помощью стрелочной функции - обратите внимание, что нам не нужен оператор use, и мы можем получить доступ к \$coefficient прямо в коротком замыкании:

```php
<?php

$coefficient = 2;

$arr = [1,2,3,4,5,6];
$new_arr = array_map(fn($e) => $e * $e * $coefficient, $arr);

print_r($new_arr); //[1,4,9,16,32,50,72]

```

### Оператор объединения

Оператор объединения в PHP 7.4 может сэкономить время и упростить код. Он присваивает значение справа от оператора левому параметру, если значение этого параметра равно нулю. В противном случае значение параметра останется прежним. Один из наиболее распространенных вариантов использования для этого - когда вы импортируете переменные из суперглобальных переменных и хотите проверить, было ли передано значение, в противном случае укажите значение по умолчанию.

В следующем примере показано, как можно упростить код, сравнивая подобные операторы, используя до PHP 7, выпусков PHP 7.x до PHP 7.4 и PHP 7.4, в которых используются объединяющие операторы присваивания:

```php
<?php

//PHP < 7
$data['key'] = isset($data['key']) ? $data['key'] : 'some_default';

//PHP 7.X < 7.4
$data['key'] = $data['key'] ?? 'some_default';

//PHP >= 7.4
$data['key'] ??= 'some_default';
```

### Оператор распространения (Spread)

Теперь можно использовать оператор распространения в выражениях массива:

```php
$array1 = [2,3,4];
$array2 = [7,8,10];
```

До PHP 7.4 вы должны написать следующее для объединения массивов:

```php
$combineArray = array_merge([1,2], $arr1, [6,7], $arr2);
```

В PHP 7.4 вы можете написать то же утверждение, например, так:

```php
$combineArray = [1, 2, ...$arr1, 6, 7, ...$arr2];
```

### Разделитель в числовых литералах

Функциональность разделителя числовых литералов в PHP 7.4 позволяет улучшить читаемость кода за счет добавления подчеркивания между цифрами в числовых литералах. Это действительно помогает читать большие числа, такие как 100 миллионов, один миллиард и т. Д.

Например, до PHP 7.4 вы должны были писать такие числа:

```php
$threshold = 1000000000
```

Теперь, в PHP 7.4, вы можете добавить числовые литеральные разделители, чтобы значение выглядело так:

```php
$threshold = 1_000_000_000

```

Обратите внимание, что это улучшение только для удобства чтения - компилятор удалит эти разделители при компиляции кода.

### Изменения движка

PHP 7.4 включает улучшенную функциональность движка, в том числе:

-   Типизированные свойства
-   Ковариантная доходность и контравариантные параметры
-   Сериализация пользовательских объектов

#### Типизированные свойства

В PHP 7.4 свойства класса могут быть типизированы. Вот пример того, как вы можете использовать типизированные свойства, частные и общедоступные, в классе с именем Account:

```php
<?php

class Account {
    private int $id;
    private Money $balance;
}
```

#### Ковариантные возвраты и контравариантные параметры

Релизы PHP до 7.4 поддерживали инвариантные возвращаемые типы и типы параметров, что означало, что методы в классе, реализующем интерфейс или наследующем от другого класса, должны возвращать значение того же типа, что и возвращаемое значение методов, которые они переопределяют или реализуют. Точно так же аргументы метода должны быть того же типа, что и методы, которые они переопределяют или реализуют.

В PHP 7.4 они могут быть разными, что полезно во многих сценариях. Однако для возвращаемых типов возвращаемое значение метода в дочернем классе должно быть более конкретным, чем возвращаемое значение метода, который переопределяется или реализуется в родительском классе или интерфейсе (ковариантный), а для аргументов метода в дочернем классе они должны быть менее конкретными, чем аргументы метода, переопределяемые или реализуемые в родительском классе или интерфейсе.

Вот пример ковариантного возврата:

```php
<?php

interface Factory {
    public function make(): object;
}

class AdminFactory implements Factory {
    public function make(): User;
}
```

Вот пример контравариантных параметров:

```php
<?php

interface Concatable {
    public function concat(Iterator $input);
}

class Collection implements Concatable {
    // принимает все итерации, а не только Iterator
    public function concat(iterable $input) {/* . . . */}
}
```

### Пользовательская сериализация объектов

В PHP 7.4 доступны два новых метода сериализации настраиваемых объектов: _serialize () и \_unserialize (). Они были добавлены поверх существующих механизмов интерфейса \_sleep () / _ wakeup () и Serializable.

Эти две функции были добавлены для решения некоторых проблем, которые были у механизма **sleep () / ** wakeup () и механизма интерфейса Serializable. Рассмотрим следующий фрагмент кода:

```php
<?php

class A implements Serializable {
    private $prop;
    public function serialize() {
        return serialize($this->prop);
    }
    public function unserialize($payload) {
        $this->prop = unserialize($payload);
    }
}
class B extends A {
    private $prop;
    public function serialize() {
        return serialize([$this->prop, parent::serialize()])
    }
    public function unserialize($payload) {
        [$prop, $parent] = unserialize($payload);
        parent::unserialize($parent);
        $this->prop = $prop;
    }
```

В этом примере:

-   При сериализации: вызывается A::serialize (), затем вызывается B::serialize ().
-   При десериализации B::unserialize () вызывается A::unserialize ().
-   Это делает так, что обратные ссылки, созданные во время сериализации, больше не будут правильными во время десериализации.

Были и другие проблемы:

-   Выполнение кода в середине сериализации опасно.
    -- В прошлом это приводило ко многим уязвимостям.
    -- Вызовы wakeup() откладываются до конца сериализации.
    -- Сначала строится весь граф объектов, а затем выполняются вызовы \_\_wakeup () из очереди.
    -- Затем прежние методы видят объекты до того, как они полностью не будут сериализованы => unsafe.

-   Не существует общего способа анализа сериализованных строк.
    -- Это связано с тем, что сериализация может возвращать данные в произвольном формате.

Теперь рассмотрим этот фрагмент кода с новыми функциями /**serialize() /**unserialize ():

```php
<?php

class A {
    private $prop_a;
    public function __serialize(): array {
        return ["prop_a" => $this->prop_a];
    }
    public function __unserialize(array $data) {
        $this->prop_a = $data["prop_a"];
    }
}
class B extends A {
    private $prop_b;
    public function __serialize(): array {
        return [
            "prop_b" => $this->prop_b,
            "parent_data" => parent::__serialize(),
        ];
    }
    public function __unserialize(array $data) {
        parent::__unserialize($data["parent_data"]);
        $this->prop_b = $data["prop_b"];
    }
}
```

Обратите внимание, что вместо вызова serialize() / unserialize() метод напрямую возвращает сериализованный объект в массиве, а unserialize() принимает только массив в качестве аргумента.

## Предварительная загрузка класса

Предварительная загрузка классов дает разработчикам возможность указать файлы, которые будут компилироваться при запуске PHP, что может быть полезно во многих ситуациях, одна из которых заключается в предварительной загрузке файлов инфраструктуры. Однако, если эти файлы изменяются, сервер необходимо перезапустить.

Чтобы использовать эту функцию, передайте путь к файлу директиве opcache.preload в php.ini: opcache.preload=/path/to/project/preload.php

В нем вы должны вызывать opcache_compile_file(...) или require_once(...) для каждого файла, который вы хотите кэшировать.
Есть несколько предостережений при предварительной загрузке классов:

-   Несвязанные классы нельзя предварительно загрузить. Также должны быть предварительно загружены зависимости, интерфейсы, трейты и родительские классы.
-   При попытке загрузить несвязанный класс компилятор выдает предупреждение. Он все равно будет работать. Однако не все классы будут предварительно загружены.

-   require_once можно использовать, чтобы полагаться на автозагрузчик для загрузки всех зависимостей, признаков, интерфейсов и родительских классов.

### FFI (Foreign Function Interface)

API интерфейса внешних функций (FFI) существует уже много лет на языках Python и LuaJIT. В PHP 7.4 это новое расширение, которое обеспечивает более простой способ вызова собственных функций и доступа к собственным переменным. FFI можно использовать для включения внешних библиотек, написанных на C с относительной легкостью, и позволяет быстро создавать прототипы без необходимости писать полное расширение.

Чтобы использовать PHP FFI, вам необходимо предоставить файл заголовка (.h) с функциями, которые вы хотите предоставить через FFI, а затем загрузить разделяемую библиотеку, реализующую их, с помощью FFI :: load(). Как только вы это сделаете, функции и структуры данных, определенные в .h и реализованные в разделяемой библиотеке, станут доступны внутри вашего PHP-скрипта через объект FFI.

Вы можете узнать больше об API FFI в этих ресурсах:

### Deprecations и другие языковые изменения

В PHP 7.4 внесены некоторые дополнительные изменения, о которых важно знать. Начнем с Deprecations.

В большинстве, если не во всех, языках программирования используется правоассоциативный тернарный оператор. Однако в PHP используется левоассоциативный алгоритм, что может сбивать с толку разработчиков. Начиная с PHP 7.4, для следующего кода будет появляться предупреждение об устаревании, если не используются круглые скобки:

```php
1 ? 2 : 3 ? 4 : 5; // deprecated
(1 ? 2 : 3) ? 4 : 5; // ok
```

В PHP 8 устаревание станет ошибкой во время компиляции.

Вот краткий обзор других изменений в PHP 7.4:

-   Теперь в \_toString () разрешены исключения. Ранее они были запрещены из-за уязвимости.
-   Функция array_merge может быть вызвана без аргументов или любого параметра, где раньше требовался один параметр. Это сделано для поддержки использования оператора распространения и крайнего случая, когда параметр, переданный в array_merge, может быть пустым.
-   Были произведены обновления для proc_open(), чтобы он мог выполнять программы, передавая массив вместо строки и без использования shell оболочки.
