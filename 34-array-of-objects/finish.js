/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars = [
    {
        carBrand: 'VAZ',
        price: 20000,
        isAvailableForSale: true
    },
    {
        carBrand: 'BMW',
        price: 20000000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Porsche',
        price: 10000000,
        isAvailableForSale: false
    }
];
cars.push({
    carBrand: 'Mercedes',
    price: 15000000,
    isAvailableForSale: true
});
console.log(cars);