// ЗАДАНИЕ №1
{
    console.log("\nЗАДАНИЕ №1\n");
    {
        console.log("\t ВАРИАНТ №1\n");

        function makeCounter() {
            let currentCount = 1;

            return function() { // (*)
                return currentCount++;
            };
        }
        let counter = makeCounter();
        console.log("alert-1: 1\n");
        alert( counter()); // 1
        console.log("alert-2: 2\n");
        alert( counter()); // 2
        console.log("alert-3: 3\n");
        alert( counter()); // 3
        
        let counter2 = makeCounter();
        console.log("alert-4: 1\n");
        alert ( counter2()); // 1
    }
    {
        console.log("\t ВАРИАНТ №2\n");

        let currentCount = 1;

        function makeCounter() {
            return function() {
                return currentCount++;
            };
        }
        let counter = makeCounter();
        let counter2 = makeCounter();

        console.log("alert-1: 1\n");
        alert( counter()); // 1
        console.log("alert-2: 2\n");
        alert( counter()); // 2

        console.log("alert-3: 3\n");
        alert( counter2()); // 3
        console.log("alert-4: 4\n");
        alert( counter2()); // 4
    }
}
// ЗАДАНИЕ №2
{
    console.log("\nЗАДАНИЕ №2\n");
    // function volume(length, width, height) {return length * width * height;}
    function volume(length) {
        return function(width) {
            return function(height) {
                return length * width * height;
            };
        };
    }
    
    let calcVolume = volume(10);
    let result1 = calcVolume(5)(2); // 10 * 5 * 2 = 100
    console.log("Объём прямоугольного параллелепипеда: " + result1); // 100
}
// ЗАДАНИЕ №3
{
    console.log("\nЗАДАНИЕ №3\n");

    function* moveObject() {
        let x = 0, y = 0;
        while (true) {
            let command = prompt("Хотите сделать 10 шагов? Введите: left, right, up, down");
            switch (command) {
                case 'left':
                    x -= 10;
                    break;
                case 'right':
                    x += 10;
                    break;
                case 'up':
                    y += 10;
                    break;
                case 'down':
                    y -= 10;
                    break;
                default:
                    console.log("Неизвестная комманда");
            }
            console.log(`Вы попали в точку: (${x}, ${y})`);
            yield;
        }
    }
    
    const move = moveObject();
    
    move.next();
    move.next();
    move.next();
}
// ЗАДАНИЕ №4
{
    console.log("\nЗАДАНИЕ №4\n");

    var globalVar = "Яша Глобальный";
    function globalFunction() {
        return "Глобальная функция";
    }
    
    console.log(window.globalVar);
    console.log(window.globalFunction());
    window.globalVar = "Новый Глобальный Яша";
    console.log(globalVar);
}