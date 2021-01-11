# Введение в MySQL ч.2

## Вставка данных.

Для вставки данных используется команда INSERT:

```sql
mysql> INSERT INTO users(name,email,address,phones) VALUES('John','john@gmail.com','garden street 21','7(404) 545-33-11');
Query OK, 1 row affected (0.01 sec)

mysql> SELECT * FROM users;
+-------+-----------------+------------------+------------------+
| name  | email           | address          | phones           |
+-------+-----------------+------------------+------------------+
| John | john@gmail.com | garden street 21 | 7(404) 545-33-11 |
+-------+-----------------+------------------+------------------+
1 row in set (0.00 sec)

mysql>

```

---

## Вывод данных из таблицы.

SELECT используется для извлечения строк, выбранных из одной или нескольких таблиц, и может включать операторы UNION и подзапросы, SELECT вместе с INSERT наиболее часто используемые команды:

```sql
mysql> SELECT * FROM users;
+------+----------------+-------------------+------------------+
| name | email          | address           | phones           |
+------+----------------+-------------------+------------------+
| John | john@gmail.com | Gardern Street 21 | 7(404) 545-33-11 |
+------+----------------+-------------------+------------------+
1 row in set (0.00 sec)

mysql>

```

---

## Удаление строки.

```sql
mysql> DELETE FROM users WHERE name='admin';
Query OK, 1 row affected (0.01 sec)

mysql>

```

---

## Отображение определенных столбцов из таблицы.

Если вам необходимо отобразить только некоторые столбцы из таблицы, мы можем указать, какие столбцы будут отображаться.

SELECT col_1, col_2, col_3, … FROM tbl_name.

```sql
mysql> SELECT name, address, phones FROM users;
+------+-------------------+------------------+
| name | address           | phones           |
+------+-------------------+------------------+
| John | Gardern Street 21 | 7(404) 545-33-11 |
+------+-------------------+------------------+
1 row in set (0.00 sec)

mysql>
```

---

## Выборка с условием (SELECT..WHERE...).

Если нужно отображать только определенные данные ,необходимо добавить команду WHERE к запросу SELECT.

```sql
mysql> SELECT * FROM users WHERE name='John';
+------+----------------+-------------------+------------------+
| name | email          | address           | phones           |
+------+----------------+-------------------+------------------+
| John | john@gmail.com | Gardern Street 21 | 7(404) 545-33-11 |
+------+----------------+-------------------+------------------+
1 row in set (0.00 sec)

mysql>
```

---

## Сортировка результатов (SELECT… ORDER BY)

Команда ORDER BY используется для сортировки сгенерированных данных. Базовый запрос SELECT… ORDER BY:

```sql
mysql> SELECT * FROM users ORDER BY name;
+-------+----------------+------------------------------+-------------------------+
| name  | email          | address                      | phones                  |
+-------+----------------+------------------------------+-------------------------+
| Adam  | adam@gmil.com  | 7466 Baumbach Ville Apt. 544 | (802) 754-223399 x87533 |
| Bruce | @gmil.com      | 4309  Ville Apt. 789         | (802) 543-998877 554433 |
| John  | john@gmail.com | Gardern Street 21            | 7(404) 545-33-11        |
| Mike  | mike@gmil.com  | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512   |
+-------+----------------+------------------------------+-------------------------+
4 rows in set (0.00 sec)

mysql>

```

---

## Использование LIMIT (SELECT… LIMIT).

MySQL имеется необязательная опция LIMIT для ограничения результатов запроса SELECT, базовый формат запроса SELECT… LIMIT:

```sql
mysql> SELECT * FROM users LIMIT 2;
+------+----------------+------------------------------+-----------------------+
| name | email          | address                      | phones                |
+------+----------------+------------------------------+-----------------------+
| John | john@gmail.com | Gardern Street 11            | 3(505) 233-55-66      |
| Mike | mike@gmil.com  | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512 |
+------+----------------+------------------------------+-----------------------+
2 rows in set (0.00 sec)

mysql>
```

---

## Использование оператора LIKE

Оператор LIKE используется вместе с условием WHERE для поиска в столбце.

```sql
mysql> SELECT * FROM users WHERE name LIKE 'Mike';
+------+---------------+------------------------------+-----------------------+
| name | email         | address                      | phones                |
+------+---------------+------------------------------+-----------------------+
| Mike | mike@gmil.com | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512 |
+------+---------------+------------------------------+-----------------------+
1 row in set (0.00 sec)

mysql>
```

В сочетании с оператором LIKE часто используются два подстановочных знака:

- % - знак процента представляет ноль, один или несколько символов.
- \_ подчеркивание представляет собой один символ

```sql
mysql> SELECT * FROM users WHERE name LIKE 'M%';
+------+---------------+------------------------------+-----------------------+
| name | email         | address                      | phones                |
+------+---------------+------------------------------+-----------------------+
| Mike | mike@gmil.com | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512 |
+------+---------------+------------------------------+-----------------------+
1 row in set (0.00 sec)

mysql>
```

##

```sql
mysql> SELECT * FROM users;
+-------+----------------+------------------------------+-------------------------+
| name  | email          | address                      | phones                  |
+-------+----------------+------------------------------+-------------------------+
| John  | john@gmail.com | Gardern Street 11            | 3(505) 233-55-66        |
| Mike  | mike@gmil.com  | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512   |
| Adam  | adam@gmil.com  | 7466 Baumbach Ville Apt. 544 | (802) 754-223399 x87533 |
| Bruce | @gmil.com      | 4309  Ville Apt. 789         | (802) 543-998877 554433 |
+-------+----------------+------------------------------+-------------------------+
4 rows in set (0.00 sec)

mysql> UPDATE users SET phones='7(708) 432-22-44' WHERE name='John';
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM users;
+-------+----------------+------------------------------+-------------------------+
| name  | email          | address                      | phones                  |
+-------+----------------+------------------------------+-------------------------+
| John  | john@gmail.com | Gardern Street 11            | 7(708) 432-22-44        |
| Mike  | mike@gmil.com  | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512   |
| Adam  | adam@gmil.com  | 7466 Baumbach Ville Apt. 544 | (802) 754-223399 x87533 |
| Bruce | @gmil.com      | 4309  Ville Apt. 789         | (802) 543-998877 554433 |
+-------+----------------+------------------------------+-------------------------+
4 rows in set (0.00 sec)

mysql>

```

## Обновление данных UPDATE.

Для обновления определенной строки в таблице используется запрос UPDATE:

```sql
mysql> SELECT * FROM users;
+-------+----------------+------------------------------+-------------------------+
| name  | email          | address                      | phones                  |
+-------+----------------+------------------------------+-------------------------+
| John  | john@gmail.com | Gardern Street 11            | 3(505) 233-55-66        |
| Mike  | mike@gmil.com  | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512   |
| Adam  | adam@gmil.com  | 7466 Baumbach Ville Apt. 544 | (802) 754-223399 x87533 |
| Bruce | @gmil.com      | 4309  Ville Apt. 789         | (802) 543-998877 554433 |
+-------+----------------+------------------------------+-------------------------+
4 rows in set (0.00 sec)

mysql> UPDATE users SET phones='7(708) 432-22-44' WHERE name='John';
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM users;
+-------+----------------+------------------------------+-------------------------+
| name  | email          | address                      | phones                  |
+-------+----------------+------------------------------+-------------------------+
| John  | john@gmail.com | Gardern Street 11            | 7(708) 432-22-44        |
| Mike  | mike@gmil.com  | 7483 Baumbach Ville Apt. 963 | (801) 794-0134 x34512   |
| Adam  | adam@gmil.com  | 7466 Baumbach Ville Apt. 544 | (802) 754-223399 x87533 |
| Bruce | @gmil.com      | 4309  Ville Apt. 789         | (802) 543-998877 554433 |
+-------+----------------+------------------------------+-------------------------+
4 rows in set (0.00 sec)

mysql>
```