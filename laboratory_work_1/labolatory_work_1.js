// ЗАДАНИЕ №1
{
    let a = 5;          // number
    let name = "Name";  // string
    let i = 0;          // number
    let double = 0.23;  // number
    let result = 1/0;   // number (INF)
    let answer = true;  // boolean
    let no = null;      // object
    
    console.log("\nЗАДАНИЕ №1\n");
    
    console.log(typeof(a));
    console.log(typeof(name));
    console.log(typeof(i));
    console.log(typeof(double));
    console.log(typeof(result));
    console.log(typeof(answer));
    console.log(typeof(no));
}
// ЗАДАНИЕ №2
{
    console.log("\nЗАДАНИЕ №2\n");

    let widthA = 45;
    let heightB = 21;
    let sideB = 5;
    
    let countLength = Math.floor(widthA / sideB);
    let countWidth = Math.floor(heightB / sideB);
    
    console.log("Общее количество квадратов: ", countLength * countWidth);
}
// ЗАДАНИЕ №3
{
    console.log("\nЗАДАНИЕ №3\n");

    let i = 2;
    let a = ++i;        // сперва i=3, а затем a=i
    let b = i++;        // сперва b=i, а затем i=4
    console.log(a > b);     // false
    console.log(a < b);     // false
    console.log(a == b);    // true
    console.log(a === b);   // true
    console.log(i);
}
// ЗАДАНИЕ №4
{
    console.log("\nЗАДАНИЕ №4\n");

    console.log("Котик" === "котик" ? "Равны" : "Не равны"); // Разный регистр, поэтому: Не равны
    console.log("Котик" === "китик" ? "Равны" : "Не равны"); // Разные символы (о и и), поэтому: Не равны
    console.log("Кот" === "Котик" ? "Равны" : "Не равны");   // Разная длина строк, поэтому: Не равны
    console.log("Привет" === "Пока" ? "Равны" : "Не равны"); // Разные строки, поэтому: Не равны
    
    console.log(73 === "53" ? "Равны" : "Не равны");         // Число и строка с разными значениями, поэтому: Не равны
    console.log(false == 0 ? "Равны" : "Не равны");          // Не строгое сравнение, false преобразуется в 0, поэтому: Равны
    console.log(54 == true ? "Равны" : "Не равны");          // Число 54 не преобразуется в true, поэтому: Не равны
    console.log(123 == false ? "Равны" : "Не равны");        // Число 123 не преобразуется в false, поэтому: Не равны
    
    console.log(true == "3" ? "Равны" : "Не равны");         // Строка "3" преобразуется в число 3, true — в 1, поэтому: Не равны
    console.log(3 == "5мм" ? "Равны" : "Не равны");          // "5мм" не может быть преобразован в число, поэтому: Не равны
    console.log(8 == "-2" ? "Равны" : "Не равны");           // -2 (из строки "-2") и 8 разные числа, поэтому: Не равны
    console.log(34 == "34" ? "Равны" : "Не равны");          // Строка "34" преобразуется в число 34, поэтому: Равны
    
    console.log(null == undefined ? "Равны" : "Не равны");   // При нестрогом сравнении null и undefined считаются равными, поэтому: Равны
}
// ЗАДАНИЕ №5
{
    console.log("\nЗАДАНИЕ №5\n");
    
let Name = "Яша Яшинов Яшович";

let userInput = prompt("Введите ваше имя", '');

// Приводим обе строки к нижнему регистру
let normalizedName = Name.toLowerCase();
let normalizedUserInput = userInput.toLowerCase();

if (normalizedUserInput.includes("яша")) {
    console.log("Введенные данные верные");
} else {
    console.log("Введенные данные неверные");
}
}
// ЗАДАНИЕ 6
{
    console.log("\nЗАДАНИЕ №6\n");

    function checkExams(russian, math, english) {
        if (russian && math && english) {
            console.log("Перевод на следующий курс");
            return 'Перевод на следующий курс';
        } else if (!russian && !math && !english) {
            console.log("Отчисление");
            return 'Отчисление';
        } else {
            console.log("Пересдача");
            return 'Пересдача';
        }
    }
    
    let russian = prompt("Сдал экзамен по русскому? (да/нет)") === "да";
    let math = prompt("Сдал экзамен по математике? (да/нет)") === "да";
    let english = prompt("Сдал экзамен по английскому? (да/нет)") === "да";
    
    let result = checkExams(russian, math, english);
    alert(result);
      
}
// ЗАДАНИЕ 7
{
    console.log("\nЗАДАНИЕ №7\n");

    console.log(true + true);   // 2
    console.log(0 + "5");       // 05
    console.log(8/Infinity);    // 0
    console.log(9 * "\n9");     // 81
    console.log(null - 1);      // -1
    console.log("5" - 2);       // 3
    console.log("5px" - 3);     // NaN
    console.log(true - 3);      // -2
    console.log(7 || 0);        // 7
}
// ЗАДАНИЕ 8
{
    console.log("\nЗАДАНИЕ №8\n");

    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i + 2);
        } else {
            console.log(`${i}мм`);
        }
    }    
}
// ЗАДАНИЕ 9
console.log("\nЗАДАНИЕ №9\n");
{
    console.log("Через объект:\n");
    
    const daysOfWeek = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье"
    };
    
    let dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));
    
    if (daysOfWeek[dayNumber]) {
        alert(daysOfWeek[dayNumber]);
    } else {
        alert("Неверный номер дня.");
    }
    
}
{
    console.log("Через массив:\n");

    const daysOfWeekArray = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    let dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));
    
    if (dayNumber >= 1 && dayNumber <= 7) {
        alert(daysOfWeekArray[dayNumber]);
    } else {
        alert("Неверный номер дня.");
    }
}
// ЗАДАНИЕ 10
{
    console.log("\nЗАДАНИЕ №10\n");

    function createString(param1 = "По умолчанию", param2, param3) {
        return `${param1} ${param2} ${param3}`;
    }
    let userInput = prompt("Введите третий параметр:");
    
    let result = createString(undefined, "Второй параметр", userInput);
    
    console.log(result);
}
// ЗАДАНИЕ 11
console.log("\nЗАДАНИЕ №11\n");
{
    console.log("Function Declaration:\n");

    function params(a, b) {
        if (a === b) {
            return 4 * a; // Периметр квадрата
        } else {
            return a * b; // Площадь прямоугольника
        }
    }
    
    let a = parseFloat(prompt("Введите сторону a:"));
    let b = parseFloat(prompt("Введите сторону b:"));
    
    alert(params(a, b));
}
{
    console.log("Function Expression:\n");

    const params = function(a, b) {
        if (a === b) {
            return 4 * a; // Периметр квадрата
        } else {
            return a * b; // Площадь прямоугольника
        }
    };
    
    let a = parseFloat(prompt("Введите сторону a:"));
    let b = parseFloat(prompt("Введите сторону b:"));
    
    alert(params(a, b));    
}
{
    console.log("Стрелочная функция:\n");

    const params = (a, b) => a === b ? 4 * a : a * b;

    let a = parseFloat(prompt("Введите сторону a:"));
    let b = parseFloat(prompt("Введите сторону b:"));
    
    alert(params(a, b));
}