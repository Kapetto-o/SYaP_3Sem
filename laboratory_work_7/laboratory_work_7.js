// ЗАДАНИЕ №1
{
    console.log("\nЗАДАНИЕ №1\n");
    {
        const person = {
            name: "Яша",
            age: 30,
            greet() {
                console.log(`Привет, ${this.name}!`);
            },
            ageAfterYears(years) {
                return this.age + years;
            }
        };
        person.greet();
        console.log("Возраст через 5 лет:", person.ageAfterYears(5));
    }
}
// ЗАДАНИЕ №2
{
    console.log("\nЗАДАНИЕ №2\n");
    {
        const car = {
            model: "Яшамобиль",
            year: 2020,
            getInfo() {
                console.log(`Model: ${this.model}, Year: ${this.year}`);
            }
        };
        
        car.getInfo();
    }
}
// ЗАДАНИЕ №3
{
    console.log("\nЗАДАНИЕ №3\n");
    {
        function Book(title, author) {
            this.title = title;
            this.author = author;
            this.getTitle = function() {
                return this.title;
            };
            this.getAuthor = function() {
                return this.author;
            };
        }
        
        const myBook = new Book("Сложно быть не быть Яшей", "Ленкевич Павел");
        console.log("Название:", myBook.getTitle());
        console.log("Автор:", myBook.getAuthor());
    }
}
// ЗАДАНИЕ №4
{
    console.log("\nЗАДАНИЕ №4\n");
    {
        const team = {
            players: ["Яша", "Паша", "Чемпион Галина Ивановна"],
            printPlayers() {
                this.players.forEach(player => console.log(`Игрок: ${player}`));
            }
        };
        
        team.printPlayers();
    }
}
// ЗАДАНИЕ №5
{
    console.log("\nЗАДАНИЕ №5\n");
    {
        const counter = (function() {
            let count = 0;
            return {
                increment() {
                    return ++count;
                },
                decrement() {
                    return --count;
                },
                getCount() {
                    return count;
                }
            };
        })();
        
        console.log(counter.increment());   // 1
        console.log(counter.increment());   // 2
        console.log(counter.decrement());   // 1
        console.log(counter.getCount());    // 1
    }
}
// ЗАДАНИЕ №6
{
    console.log("\nЗАДАНИЕ №6\n");
    {
        const item = {};
        Object.defineProperty(item, "price", {
            value: 100,
            writable: true,
            configurable: true,
        });
        Object.defineProperty(item, "price", {
            writable: false,
            configurable: false,
        });
        
        console.log("Цена товара:", item.price);
    }
}
// ЗАДАНИЕ №7
{
    console.log("\nЗАДАНИЕ №7\n");
    {
        const circle = {
            _radius: 5,
            get radius() {
                return this._radius;
            },
            set radius(value) {
                this._radius = value;
            },
            get area() {
                return Math.PI * this._radius ** 2;
            }
        };
        
        console.log("Радиус:", circle.radius);
        console.log("Площадь:", circle.area);
        circle.radius = 10;
        console.log("Новый радиус:", circle.radius);
        console.log("Новая площадь:", circle.area);
    }
}
// ЗАДАНИЕ №8
{
    console.log("\nЗАДАНИЕ №8\n");
    {
        const car = {};
        Object.defineProperties(car, {
            make: { value: "Toyota", writable: true, configurable: true },
            model: { value: "Corolla", writable: true, configurable: true },
            year: { value: 2021, writable: true, configurable: true }
        });
        Object.defineProperties(car, {
            make: { writable: false, configurable: false },
            model: { writable: false, configurable: false },
            year: { writable: false, configurable: false }
        });
        
        console.log("Марка:", car.make);
        console.log("Модель:", car.model);
        console.log("Год выпуска:", car.year);
    }
}
// ЗАДАНИЕ №9
{
    console.log("\nЗАДАНИЕ №9\n");
    {
        const numbers = [1, 2, 3];
        Object.defineProperty(numbers, "sum", {
            get() {
                return this.reduce((acc, val) => acc + val, 0);
            },
            configurable: false,
        });
        
        console.log("Сумма элементов:", numbers.sum);
    }
}
// ЗАДАНИЕ №10
{
    console.log("\nЗАДАНИЕ №10\n");
    {
        const rectangle = {
            _width: 5,
            _height: 10,
            get width() {
                return this._width;
            },
            set width(value) {
                this._width = value;
            },
            get height() {
                return this._height;
            },
            set height(value) {
                this._height = value;
            },
            get area() {
                return this._width * this._height;
            }
        };
        
        console.log("Ширина:", rectangle.width);
        console.log("Высота:", rectangle.height);
        console.log("Площадь:", rectangle.area);
        
        rectangle.width = 15;
        rectangle.height = 20;
        console.log("Новая ширина:", rectangle.width);
        console.log("Новая высота:", rectangle.height);
        console.log("Новая площадь:", rectangle.area);
    }
}
// ЗАДАНИЕ №11
{
    console.log("\nЗАДАНИЕ №11\n");
    {
        const user = {
            firstName: "Яша",
            lastName: "Павлович",
            get fullName() {
                return `${this.firstName} ${this.lastName}`;
            },
            set fullName(value) {
                [this.firstName, this.lastName] = value.split(" ");
            }
        };
        
        console.log("Полное имя:", user.fullName);
        user.fullName = "Паша Яшавлевич";
        console.log("Новое полное имя:", user.fullName);
        console.log("Имя:", user.firstName);
        console.log("Фамилия:", user.lastName);
    }
}