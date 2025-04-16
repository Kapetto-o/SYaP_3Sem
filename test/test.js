// КАКОЙ БУДЕТ ВЫВОД?
{
    // // counter.js
    // let counter = 10;
    // export default counter;

    // // index.js
    // import myCounter from "./counter";
    // myCounter += 1;
    // console.log(myCounter);
    // // ОТВЕТ: 11
}
{
    const user = { name: "Lydia", age: 21 };
    const admin = { admin: true, ...user };
    console.log(admin);
    // ОТВЕТ: { admin: true, name: "Lydia", age: 21 }
}
{
    const name = "Lydia";
    age = 21;
    console.log(delete name);
    console.log(delete age);
    // false, true
}
{
    const numbers = [1, 2, 3, 4, 5];
    const [y] = numbers;
    console.log(y);
    //ОТВЕТ: 1    
}
{
    const set = new Set([1, '1', 2, '3', 4]);
    console.log(set);
    //ОТВЕТ: {1, '1', 2, '3', 4}  
}
{
    const person = { name: "Lydia" };
    Object.defineProperty(person, 'age', { value: 21 });
    console.log(person);
    console.log(Object.keys(person));
    //ОТВЕТ: { name: "Lydia", age: 21 } ["name"]
}
{
    const a = {};
    const b = { key: "b" };
    const c = { key: "c" };
    a[b] = 123;
    a[c] = 456;
    console.log(a[b]);
    //ОТВЕТ: 456 
}
{
    const value = { number: 10 };

    const multiply = ( x = { ...value } ) => {
        console.log((x.number *= 2));
    };
    
    multiply();
    multiply();
    multiply(value);
    multiply(value);
    //ОТВЕТ: 20 20 20 40
}
{
    [1,2,3,4].reduce((x,y)=>console.log(x,y));
    //ОТВЕТ: 1 2, underfined 3, underfined 4
}
{
    let num = 10;
    const increaseNumber = ()=>num++;
    const increasePussedNumber=number=>number++;

    const num1=increaseNumber();
    const num2=increasePussedNumber(num1);

    console.log(num1);
    console.log(num2);
    //ОТВЕТ: 10, 10
}
{
    function sayHi(name){
        return `Hi there, ${name}`
    }
    console.log(sayHi())
    //ОТВЕТ: Hi there, undefined
}
{
    const person = {
        name: "Lydia",
        age: 21
    }
    let city = person.city;
    city = "Amsterdam";
    console.log(person);
    //ОТВЕТ: {name: 'Lydia', age: 21}
}
{
    function sum (num1, num2 = num1){
        console.log(num1+num2);
    }
    console.log(sum(10));
    //ОТВЕТ: 20 undefined
}
{
    const list = [1+2, 1*2, 1/2]
    console.log (list);
    //ОТВЕТ: [3,2,0.5]
}
{
    // function checkAge(age){
    //     if (age<18){
    //         const message = "Sorry, you're too young."
    //     } else {
    //         const message = "Yay! You're old enough!"
    //     }
    //     return message
    // }
    // console.log(checkAge(21));
    // //ОТВЕТ: ReferenceError
}
{
    // function getItems(fruitList, ...args, favoriteFruit) {
    //     return [...fruitList, ...args, favoriteFruit];
    // }
    // let items = getItems(["banana", "apple"], "pear", "lemon");
    // console.log(items);
    //ОТВЕТ: SyntaxError
}
{
    const getList = ([x, ...y]) => [x,y]
    
    // const getUser = user => {name:user.name, age: user.age}
    
    const list = [1, 2, 3, 4];
    const user = { name: "Lydia", age: 21 };
    
    console.log(getList(list));
    // console.log(getUser(user));
    //ОТВЕТ: [1,[2,3,4]] and undefined
}
{
    console.log("I want pizza"[0]);
    //ОТВЕТ: I
}
//КАКОЙ ИЗ СЛЕДУЮЩИХ НАБОРОВ ПАРАМЕТРОВ ВЕРНЁТ 6?
{
    function sumValues(x,y,z) {
        return x+y+z;
    }
    console.log(sumValues(...[1, 2, 3]))
    //ОТВЕТ: sumValues(...[1, 2, 3])
}
// КАКАЯ ОПЦИЯ ПОЗВОЛЯЕТ УСТАНОВИТЬ hasName РАВНЫМ true, ЕСЛИ ВЫ НЕ МОЖЕТЕ ПЕРЕДАТЬ true В КАЧЕСТВЕ АРГУМЕНТА?
{
    function getName (name){
        const hasName= !!name;
    }
    //ОТВЕТ: !!name
}
// КАКИМ БУДЕТ РЕЗУЛЬТАТ?
{
    function sayHi(){
        return(()=>0)();
    }
    typeof sayHi();
    console.log(typeof sayHi());
    //ОТВЕТ: number
}
{
    function* generator (i){
        yield i;
        yield i*2;
    }
    const gen = generator(10);
    console.log(gen.next().value);
    console.log(gen.next().value);
    //ОТВЕТ: 10, 20
}
{
    const add = () => {
        const cache = {};
        return num=>{
            if (num in cache) {
                return `From cache! ${cache[num]}`;
            } else {
                const result = num +10;
                cache[num] =result;
                return `Calculated! ${result}`;
            }
        };
    };
    const addFunction=add();
    console.log (addFunction(10));
    console.log (addFunction(10));
    console.log (addFunction(5*2));
    //ОТВЕТ: Calculated! 20 From cache! 20 From cache! 20
}
{
    console.log(3+4+"5");
    //ОТВЕТ: "75"
}
{
    function Car(){
        this.make ="Lamborghini";
        return {make:"Maserati"};
    }
    const myCar = new Car();
    console.log(myCar.make);
    //ОТВЕТ: Maserati
}
{
    // class Chameleon {
    //     static.colorChange(newColor){
    //         this.newColor = newColor;
    //         return this.newColor;
    //     }
    //     constructor({newColor = "green"}={}){
    //         this.newColor=newColor;
    //     }
    // }
    // const freddie = new Chameleon({newColor: "purple"});
    // freddie.colorChange("orange");
    //ОТВЕТ: TypeError
}
//КАКОЕ ЗНАЧЕНИЕ БУДЕТ НА ВЫХОДЕ?
{
    console.log(`${(x=>x)('I love')} to program`)
    //ОТВЕТ: I love to program
}
{
    const one = (false || {} || null);
    const two = (null || false || "");
    const three = ([] || 0 || true);
    console.log(one, two, three);
    //ОТВЕТ: {} "" []
}
{
    const set = new Set();

    set.add(1);
    set.add("Lydia");
    set.add({ name: "Lydia" });
    
    for (let item of set) {
        console.log(item + 2);
    }
    //ОТВЕТ: 3 Lydia2 [object Object]2
}
//ЧТО БУДЕТ НА ВЫХОДЕ?
{
    class Counter {
        constructor(){
            this.count = 0;
        }
        increment(){
            this.count++;
        }
    }
    const counterOne = new Counter();
    counterOne.increment();
    counterOne.increment();
    const counterTwo = counterOne;
    counterTwo.increment();
    console.log(counterOne.count);
    //ОТВЕТ: 3
}
{
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    
    const member = new Person("John");
    console.log(typeof member);
    //ОТВЕТ: object  
}
{
    const name = "Lydia Hallie"
    console.log(!typeof name === "object")
    console.log(!typeof name === "string")
    //ОТВЕТ: false false
}
{
    const myFunc = ({x, y, z}) => {
        console.log(x,y,z);
    };
    myFunc(1,2,3);
    //Ответ: underfined underfined underfined
}
//КАКОЙ ИЗ ЭТИХ МЕТОДОВ МОДИФИЦИРУЕТ ИСХОДНЫЙ МАССИВ?
{
    //ОТВЕТ: splice
}
//ЧЕМУ РАВНО ЗНАЧЕНИЕ?
{
    function compareMembers(person1, person2 = person)
    {
        if (person1 !== person2){
            console.log("Not the same!")
        } else {
            console.log("They are the same!")
        }
    }
    const person = {name:"Lydia"}
    console.log(compareMembers(person));
    //ОТВЕТ: They are the same! undefined
}
{
    console.log('❤️'==='❤️');
    //ОТВЕТ: true
}
//ЧТО БУДЕТ ВЫВЕДЕНО В КОНСОЛЬ?
{
    const add =x=>y=>z=>{
        console.log(x,y,z);
        return x+y+z;
    };
    add(4)(5)(6);
    //ОТВЕТ: 4 5 6
}
//С ПОМОЩЬЮ КАКОГО КОНСТРУКТОРА МЫ МОЖЕМ УСПЕШНО РАСШИРИТЬ КЛАСС Dog?
{
    //ОТВЕТ: 2
}
//ЭТО ЧИСТАЯ ФУНКЦИЯ?
{
    function sum(a,b){
        return a+b;
    }
    //ОТВЕТ: да
}
//КАКОЙ ВЫЗОВ МЕТОДА get ВЕРНЁТ ЗНАЧЕНИЕ 'Helloworld'?
{
    const myMap = new Map();
    const myFunc = () => 'greeting';
    myMap.set(myFunc, 'Hello world!');
    //1) myMap.get('greeting')
    //2) myMap.get(myFunc)
    //3) myMap.get(() => 'greeting')
    //ОТВЕТ: 2 
}