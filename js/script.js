'use strict';

// let test = 0;
// if (test >= 0) {
//     alert('Ура, больше либо равно 0')
// } else {
//     alert('Хм, меньше 0')
// }

// let test = 0;
// if (test == 0){ // проверка на равенство
//     alert('test = 0');
// } else{
//     alert('test != 0')
// }

// let test = 2;
// if (test != 10) { // проверка на неравенство
//     alert('верно');
// } else {    
//     alert('неверно');
// }

// let test1 = 18;
// let test2 = 20;
// if (test1 < test2) {
//     alert ('верно');
// } else {
//     alert ('неверно');
// }

// let test = '4';
// if (test == 4) {
//     alert('верно') // значения равны

// } else {
//     alert('неверно')
// }

// if ('3' === 3) { // равенство по значению и типу
// 	alert('верно');
// } else {
// 	alert('неверно'); // сработает этот alert
// }

// if (3 === 3) {
// 	alert('верно'); // сработает этот alert
// } else {
// 	alert('неверно');
// }

// let test1 = 3;
// let test2 = 3;
		
// if (test1 === test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test1 = '3';
// let test2 = '3';
// if (test1 != test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test1 = 3;
// let test2 = '3';
// if (test1 !== test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// if (0 == '') {
// 	alert('верно'); // выведет 'верно'
// } else {
// 	alert('неверно');
// }

// let num1 = 2;
// let num2 = 3;
// if (num1 == 2 && num2 == 3) { // 'верно', если одновременно num1 == 2 и num2 == 3 
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let num = 3;
// if (num > 0 && num < 10) { // 'верно', если  0< num <10
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let num = 4;
// if (num > 0 && num < 5) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let num = 10;
// if (num >= 10 && num <= 20) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let num1 = 1;
// let num2 = 15;
// if (num1 <= 1 && num2 >= 3) { // логическое И, выполнение сразу двух условий - 'верно'
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let num1 = 1;
// let num2 = 15;
// if (num1 <= 0 || num2 >= 3) { // логическое ИЛИ, выполнение одного из условий - 'верно'
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let num1 = -10;
// let num2 = -10;
// if (num1 >= 0 || num2 >= 0) {
// 	alert('верно');
// } else {
// 	alert('неверно'); // выведет "неверно"
// }

// let num = 3;
// if (num > 0 && num < 5 || num > 10 && num < 20) { // Операция && имеет приоритет над ||
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let num = 3;		
// if (num > 5 && num < 10 || num == 20) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let num = 3;
// if (num > 5 || (num > 0 && num < 3) ) { // приоритет операций в явном виде (со скобками)
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let num = 3;		
// if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30) ) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = true;
// if (test === false) {
//     alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = true; // тут пишем или true, или false
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = 0;
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно'); // true - 1, false - 0
// }

// let test = 1;
// if (test != true) {
// 	alert('верно');
// } else {
// 	alert('неверно'); // 1 = true
// }

// let test = ''; // '' - 0 - false
// if (test == false) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test;		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно'); // выведет 'неверно', тк нет значения
// }

// let test = 3 * 'a'; // NaN - не true и yt false		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = true;
// if (!test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let num = 4;
// if (num != 3) {
//     alert ('внимание, число - не 3')
// }

// let num = 5;
// if (num >= 7 || num <= 5); alert (num); // сократили ссинтаксис

// if (5 == '5')
//     alert ('равно'); // удобное сокращение
// else 
//     alert ('неравно');

// let test = '';
// if (test == 0)
// 	alert('верно');
// else
// 	alert('неверно!');

// let test = '0';
// if (test == 0) alert('верно');

// let day = 20;
// if (day>0 && day<=10) {
//     alert ('Первая декада месяца');
// }
// if (day>10 && day<=20) {
//     alert ('Вторая декада месяца');
// }
// if (day>20 && day<=30) {
//     alert ('Третяя декада месяца');
// }
// if (day>30) {
//     alert ('Четвертая декада месяца');
// }

// let day = 44;
// if (day>0 && day<=10) {
//     alert ('Первая декада месяца');
// } else if (day>10 && day<=20) { // специальная конструкция "else if"
//     alert ('Вторая декада месяца');
// } else if (day>20 && day<=30) {
//     alert ('Третяя декада месяца');
// } else if (day == 31) {
//     alert ('Четвертая декада месяца');
// } else {
//     alert ('Ошибка. Вы уверены что день ' + day + 'й есть в этом месяце?');
// }

// let num = 39;
// let sum = String (num);
// if (num >= 10 && num <=99) {
//     if ((Number(sum[0]) + Number(sum[1])) <= 9) {
//         alert ('Сумма цифр однозначна');
//     } else {
//         alert ('Cумма цифр двузначна');
//     }
// } else {
//     alert('Наше число не попадает в диапазон от 10 до 99')
// }

// let age = 17;
// let adult;
// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }
// console.log(adult);

// let age = 17;
// let result;
// if (age >= 18) {
// 	if (age <= 23) {
// 		result = 'от 18 до 23';
// 	} else {
// 		result = 'больше 23';
// 	}
// } else {
// 	result = 'меньше 18';
// }
// console.log(result);

// let arr = [2, 6, 9];
// if (arr.length == 3) {
//     alert (arr[0] + arr[1] + arr[2] + ' - сумма элементов в массиве');
// } else {
//     alert ('не 3 элемента в массиве');
// }

// let str = '12345';
// if (str[0] == 1) {
// 	console.log('!');
// }

// let num = 12345;
// if (String(num)[0] == 1) {
// 	console.log('верно'); // выведет 'верно'
// } else {
// 	console.log('неверно');
// }

// let num = 50;
// let str = String(num);
// if (str [str.length-1] == 0) {
//     alert('последняя цифра = 0')
// } else {
//     alert('последняя цифра != 0')
// }

// let num = 54;
// let even = String(num) [String(num).length - 1];
// if (even == 0 || even == 2 || even == 4 || even == 6 || even == 8 ) {
//     alert ('Число четное');
// } else {
//     alert ('Число нечетное');
// }

// let num = 53;
// let even = String(num) [String(num).length - 1];
// if (even % 2 == 0) {
//     alert ('Число четное');
// } else {
//     alert ('Число нечетное');
// }

// let num = 36;
// let even = String(num) [String(num).length - 1];
// if (even % 3 == 0) {
//     alert ('Число кратно цифре 3');
// } else {
//     alert ('Число не кратно цифре 3');
// }

// Задача №1

// let monthes = {1: 'january', 2: 'fabruary', 3: 'march', 4: 'april', 5: 'may', 6: 'june', 7: 'july', 
// 8: 'augest', 9: 'september', 10: 'october', 11: 'november', 12: 'december'};
// let num = 12;
// let num_month = monthes [String(num)];
// if (num>=1 && num<=12) {
//     if (num >= 1 && num <= 2 || num == 12) {
//         console.log (num_month + ' is winter');
//     } else if (num >= 3 && num <= 5) {
//         console.log (num_month + ' is spring');
//     } else if (num >= 6 && num <= 8) {
//         console.log (num_month + ' is summer');
//     } else {
//         console.log (num_month + ' is outemn');
//     }
// } else {
//     console.log ('This number is absent')
// }

// Задача №2

// let str = 'abcde'
// if (str[0] == 'a') {
//     alert ('Да')
// } else {
//     alert ('Нет')
// }

// Задача №3

// let num = 123;
// let str = String(num);
// alert(Number(str[0]) + Number(str[1]) + Number(str[2]))

// Задача №4

// let num = 342234;
// let str = String(num);
// let sum_str123 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum_str456 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (sum_str123 == sum_str456) {
//     alert ('Да');
// } else {
//     alert ('Нет');
// }

// let num = 4;
// let result = num >=0 ? 1 : -1; // тернарный оператор
// console.log (result); 

// let num = 4;
// console.log (num >=0 ? 1 : -1); // без переменной, вывод на прямую

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log (a == b); // логические операции без if-else

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log (a > b); // выведет true

// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log (a != b); // выведет false

// let ok = confirm ('Текст вопроса');
// alert (ok);

// let age = confirm ('Есть ли вам 18 лет?');
// if (age == true) {
//     alert ('Текст для людей возрастом 18+');
// } else {
//     alert ('Для вас доступ ограничен');
// }

// Задача №1

// let num1 = 1;
// let num2 = 2;
// if (num1 + num2 == 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Задача №2

// let num = 123;
// if (String(num)[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;
// let first = Number(String(num)[0]);
// if (first == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// Задача №3

// let num = 12;
// if (String(num).length == 2) {
//     console.log ('+++');
// }  else {
//     console.log ('---');
// }

// Задача №4

// let num = '123033'; // Равны ли суммы первых трех цифр и последних
// let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
// let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }





// let num = 3;
// switch (num) {
//     case 1: 
//         alert ('Зима')
//     break;
//     case 2: 
//         alert ('Весна')
//     break;
//     case 3: 
//         alert ('Лето')
//     break;
//     case 4: 
//         alert ('Осень')
//     break;
//     default: 
//         alert ('Значение неверное')
//     break;
// }

