{
    // ЗАДАНИЕ №1
    {
        console.log("\nЗАДАНИЕ №1\n");

        const set = new Set ([1,1,2,3,4]);

        console.log(set);
    }
    // ЗАДАНИЕ №2
    {
        console.log("ЗАДАНИЕ №2\n");
        
        const name = "Lydia";
        age=21;

        console.log(delete name);
        console.log(delete age);
    }
    // ЗАДАНИЕ №3
    {
        console.log("\nЗАДАНИЕ №3\n");

        const numbers = [1,1,2,3,4];
        const [y,,m] = numbers;

        console.log(y);
        console.log(m);
    }
    // ЗАДАНИЕ №4
    {
        console.log("\nЗАДАНИЕ №4\n");

        const user = {name: "Lydia", age: 21};
        const admin = {admin: true, ...user};

        console.log(admin);
    }
    // ЗАДАНИЕ №5
    {
        console.log("\nЗАДАНИЕ №5\n");
        
        const person = {name: "Lydia"};

        Object.defineProperty(person, "age", {value: 21, enumerable: true}); // enumerable

        console.log(person);
        console.log(Object.keys(person));
    }
    // ЗАДАНИЕ №6
    {
        console.log("\nЗАДАНИЕ №6\n");

        const a = {};
        const b = {key: "b"};
        const c = {key: "c"};


        a[c] = 456;
        a[b] = 123;
        console.log(a[b]);
    }
    // ЗАДАНИЕ №7
    {
        console.log("\nЗАДАНИЕ №7\n");

        let num = 10;

        const increaseNumber = () =>num++;
        const increasePassedNumber = number => number++;

        const num1 = increaseNumber();
        const num2 = increasePassedNumber(num1);

        console.log(num1);
        console.log(num2);
    }
    // ЗАДАНИЕ №8
    {
        console.log("\nЗАДАНИЕ №8\n");

        const value = {number: 10};
        
        const multiply = (x = {...value}) => {
            console.log((x.number *= 2));
        };

        multiply();
        multiply();
        multiply(value);
        multiply(value);
    }
    // ЗАДАНИЕ №9
    {
        console.log("\nЗАДАНИЕ №9");

        [1,2,3,4].reduce((x,y) => console.log(x,y));
        // [1,2,3,4].reduce((x,y) => {console.log(x,y); return x;});    // Исправление
    }
}