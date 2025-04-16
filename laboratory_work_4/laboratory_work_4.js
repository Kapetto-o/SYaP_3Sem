// ЗАДАНИЕ №1
{
    console.log("\nЗАДАНИЕ №1\n");
let productSet = new Set();

function addProduct(product) {
    productSet.add(product);
    console.log(`${product} добавлен в список.`);
}

function removeProduct(product) {
    if (productSet.has(product)) {
        productSet.delete(product);
        console.log(`${product} удален из списка.`);
    } else {
        console.log(`${product} не найден в списке.`);
    }
}

function hasProduct(product) {
    if (productSet.has(product)) {
        console.log(`${product} есть в списке.`);
    } else {
        console.log(`${product} отсутствует в списке.`);
    }
}

function countProducts() {
    console.log(`Количество товаров: ${productSet.size}`);
}

addProduct("Яблоки");
addProduct("Бананы");

hasProduct("Яблоки");       // Яблоки есть в списке.
hasProduct("Груши");        // Груши отсутствуют в списке.

removeProduct("Бананы");

countProducts();            // Количество товаров: 1
}
// ЗАДАНИЕ №2
{
  console.log("\nЗАДАНИЕ №2\n");
let studentsSet = new Set();

function addStudent(student) {
    studentsSet.add(student);
    console.log(`Студент с номером зачетки ${student.id} добавлен.`);
}

function removeStudentById(id) {
    let studentFound = false;
    studentsSet.forEach(student => {
        if (student.id === id) {
            studentsSet.delete(student);
            studentFound = true;
            console.log(`Студент с номером зачетки ${id} удален.`);
        }
    });
    if (!studentFound) {
        console.log(`Студент с номером зачетки ${id} не найден.`);
    }
}

function filterByGroup(group) {
    const filteredStudents = Array.from(studentsSet).filter(student => student.group === group);
    console.log(`Студенты из группы ${group}:`, filteredStudents);
    return filteredStudents;
}

function sortById() {
    const sortedStudents = Array.from(studentsSet).sort((a, b) => a.id - b.id);
    console.log("Список студентов, отсортированных по номеру зачетки:", sortedStudents);
    return sortedStudents;
}

let student1 = { id: 12345, group: "1", name: "Яшович Яша Яшавич" };
let student2 = { id: 54321, group: "2", name: "Петровна Маща Петровна" };
let student3 = { id: 67890, group: "1", name: "Сидоров Сидор Сидорович" };

addStudent(student1);
addStudent(student2);
addStudent(student3);

removeStudentById(67890);

filterByGroup("1");
filterByGroup("2");

sortById();
}
// ЗАДАНИЕ №3
{
  console.log("\nЗАДАНИЕ №3\n");
let cart = new Map();

function addProduct(id, name, quantity, price) {
    if (cart.has(id)) {
        console.log(`Товар с id ${id} уже существует.`);
    } else {
        cart.set(id, { name, quantity, price });
        console.log(`Товар "${name}" с id ${id} добавлен в корзину.`);
    }
}

function removeProductById(id) {
    if (cart.delete(id)) {
        console.log(`Товар с id ${id} удален из корзины.`);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

function removeProductsByName(name) {
    let found = false;
    for (let [id, product] of cart) {
        if (product.name === name) {
            cart.delete(id);
            console.log(`Товар "${name}" с id ${id} удален.`);
            found = true;
        }
    }
    if (!found) {
        console.log(`Товары с названием "${name}" не найдены.`);
    }
}

function updateQuantity(id, newQuantity) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.quantity = newQuantity;
        console.log(`Количество товара с id ${id} обновлено до ${newQuantity}.`);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

function updatePrice(id, newPrice) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.price = newPrice;
        console.log(`Стоимость товара с id ${id} обновлена до ${newPrice}.`);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

function countPositions() {
    console.log(`Количество позиций в списке: ${cart.size}`);
    return cart.size;
}

function calculateTotalCost() {
    let totalCost = 0;
    for (let product of cart.values()) {
        totalCost += product.quantity * product.price;
    }
    console.log(`Общая стоимость всех товаров: ${totalCost}`);
    return totalCost;
}

addProduct(1, "Яблоки", 5, 10); // название, количество, цена
addProduct(2, "Бананы", 3, 15);
addProduct(3, "Яблоки", 2, 12);

removeProductById(2);
removeProductsByName("Яблоки");

addProduct(4, "Груши", 4, 20);
updateQuantity(4, 10);
updatePrice(4, 18);

countPositions();
calculateTotalCost();
}
// ЗАДАНИЕ №4
{
  console.log("\nЗАДАНИЕ №4\n");
let cache = new WeakMap();

function cachedFunction(obj, expensiveCalculation) {
    if (cache.has(obj)) {
        console.log('Результат взят из кэша.');
        return cache.get(obj);
    } else {
        console.log('Выполнение расчета...');
        let result = expensiveCalculation();
        cache.set(obj, result);
        return result;
    }
}

function expensiveCalculation() {
    return Math.random() * 1000;
}

let param1 = { key: "value1" };
let param2 = { key: "value2" };

// Первый вызов - расчет выполнен
console.log(cachedFunction(param1, expensiveCalculation));
console.log(cachedFunction(param2, expensiveCalculation));

// Повторный вызов - результат взят из кэша
console.log(cachedFunction(param1, expensiveCalculation));
console.log(cachedFunction(param2, expensiveCalculation));

}