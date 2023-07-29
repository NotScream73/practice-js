/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */
const myString = 'Любая строка';
myString instanceof String ? console.log('String') : console.log('Не String');
typeof(myString) === 'string' ? console.log('string') : console.log('Не string');
const myAnotherString = myString.toUpperCase();
console.log(myAnotherString);