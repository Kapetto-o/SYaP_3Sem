// ЗАДАНИЕ №1
{
    console.log("\nЗАДАНИЕ №1\n");

    function basicOperation(operation, value1, value2) {
        let result;
        switch (operation) {
            case '+':
                result = value1 + value2;
                break;
            case '-':
                result = value1 - value2;
                break;
            case '*':
                result = value1 * value2;
                break;
            case '/':
                result = value2 !== 0 ? value1 / value2 : 'Ошибка: нельзя делить на 0';
                break;
            default:
                result = 'Ошибка: Выбран неподдерживающийся оператор';
        }
        return result;
    }
    
    let resultPlus = basicOperation('+', 5, 10);            // = 15
    let resulMinus = basicOperation('-', 5, 10);            // = -5
    let resultMultiplication = basicOperation('*', 5, 10);  // = 50
    let resultDivision= basicOperation('/', 5, 10);         // = 0.5

    console.log(resultPlus);
    console.log(resulMinus);
    console.log(resultMultiplication);
    console.log(resultDivision);
}
// ЗАДАНИЕ №2
{
    console.log("\nЗАДАНИЕ №2\n");

    function sumCubes(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i ** 3;
        }
        return sum;
    }

    let summ = sumCubes(5);
    console.log(summ);      // = 225
}
// ЗАДАНИЕ №3
{
    console.log("\nЗАДАНИЕ №3\n");

    function average (arr) {
        if (arr.length === 0) return 0;
        let sum = 0;
        for (let i=0; i<arr.length; i++) {
            sum += arr[i];
        }
        return sum/arr.length;
    }
    let numbersArr = [0, 1, 2, 3, 4, 5, 6]
    console.log (average(numbersArr));      // = 3
}
// ЗАДАНИЕ №4
{
    console.log("\nЗАДАНИЕ №4\n");

    function reversAndOnlyEng (str) {
        let reversedStr = str.split('').reverse().join('');
        let filteredStr = reversedStr.replace(/[^a-zA-Z ]/g, '');
        return filteredStr;
    }
    let strTest = "ЯшаYashaahsaY123??!!"
    console.log(reversAndOnlyEng(strTest)); // = YashaahsaY
}
// ЗАДАНИЕ №5
{
    console.log("\nЗАДАНИЕ №5\n");
    
    function repeatStr1 (n, str) {
        return str.repeat(n);
    }
    console.log('Первый метод: ');
    console.log(repeatStr1(5, 'Yasha'));    // = YashaYashaYashaYashaYasha

    
    function repeatStr2(n, s) {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += s;
        }
        return result;
    }
    console.log('Второй метод: ');
    console.log(repeatStr2(3, 'Yasha'));    // = YashaYashaYashaYashaYasha
}
// ЗАДАНИЕ №6
{
    console.log("\nЗАДАНИЕ №6\n");

    function difference(arr1, arr2) {
        let arr3 = [];
        
        for (let i = 0; i < arr1.length; i++) {
            let found = false;
            
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                arr3.push(arr1[i]);
            }
        }
        
        return arr3;
    }

    let arr1 = ["Yasha1", "Yasha2", "Yasha4"];
    let arr2 = ["Yasha1", "Yasha3", "Yasha5","Yasha6", "Yasha4"];

    let arr3 = difference(arr1, arr2);
    console.log(arr3); // = ["Yasha2", "Yasha4"]
}