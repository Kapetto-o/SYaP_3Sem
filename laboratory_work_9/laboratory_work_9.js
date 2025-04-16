{
    // ЗАДАНИЕ №1
    {
        console.log("\nЗАДАНИЕ №1\n");
        
        console.log("Квадрат:");
        let square = {
            size: "большой",
            color: "жёлтый"
        };
        let smallsquare = {
            __proto__: square,
            size: "маленький"
        };
        console.log("У маленького квадрата есть собственное свойство color?", smallsquare.hasOwnProperty("color"));

        console.log("\nКруг:");
        let circle = {
            radius: 10,
            shape: "круг"
        };
        let greencircle = {
            __proto__: circle,
            color: "зелёный"
        };
        let dif = Object.getOwnPropertyNames(greencircle);
        console.log("Свойства, которые отличают зеленый круг:");
        for (let i of dif) {
            console.log(`${i}: ${greencircle[i]}`);
        }

        console.log("\nТреугольник:");
        let triangle = {
            shape: "треугольник",
            countline: 1
        };
        let triangle2 = {
        __proto__: triangle,
            countline: 3
        };
        for (let i in triangle2) {
            console.log(`${i}: ${triangle2[i]}`);
        }
    }
    // ЗАДАНИЕ №2
    {
        console.log("\nЗАДАНИЕ №2\n");

        class Human {
            constructor(name = "Джесси", surname = "Пинкман", age = 24, yearOfBirthday = 1984, address = "ул. Марго, Альбукерке, Нью-Мексико") {
                this.name = name;
                this.surname = surname;
                this.age = age;
                this.yearOfBirthday = yearOfBirthday;
                this.address = address;
            }
            changeAddress(addr) {
                this.address = addr;
            }
            changeAge(year) {
                this.yearOfBirthday = year;
            }
            get age() {
                return new Date().getFullYear() - this.yearOfBirthday;
            }
            set age(year) {
                this.yearOfBirthday = new Date().getFullYear() - year;
            }
        }

        // Human.prototype.fname = "ФИмя";

        class Student extends Human {
            constructor(name, surname, yearOfBirthday, address, faculty = "ФИТ", course = 2, group = 8, numOfCard = "71232300") {
                super(name, surname, yearOfBirthday, address);
                this.faculty = faculty;
                this.course = course;
                this.group = group;
                this.numOfCard = numOfCard;
            }
            changeGroupAndCourse(gr, cr) {
                this.group = gr;
                this.course = cr;
            }
            getFullName() {
                console.log(`${this.surname} ${this.name}`);
            }
        }

        class Faculty {
            constructor(nameFaculty = "ФИТ", countOfGroup = 10, countOfPeople = 300) {
                this.nameFaculty = nameFaculty;
                this.countOfGroup = countOfGroup;
                this.countOfPeople = countOfPeople;
            }
            changeCountOfGroup(gr) {
                this.countOfGroup = gr;
            }
            changeCountOfPeople(pl) {
                this.countOfPeople = pl;
            }
            getDev(students) {
                return students.filter(student => student.numOfCard[1] === '3').length;
            }
            getGroup(students, group) {
                return students.filter(student => student.group === group);
            }
        }
        
        const student1 = new Student("Яша", "Булка", 2000, "ул. Мазурова");
        const student2 = new Student("Галя", "Петровна", 2001, "ул. Калатушкина", "ФИТ", 2, 7, "73232300");
        const student3 = new Student("Миша", "Карнавал", 2002, "ул. Пушкина", "ФИТ", 2, 7, "73195151");

        const faculty = new Faculty("ФИТ", 10, 300);

        const students = [student1, student2, student3];
        console.log("Количество студентов специальности ДЭВИ:", faculty.getDev(students));

        const groupStudents7 = faculty.getGroup(students, 7);
        for (let i of groupStudents7) {
            console.log(`${i.name} ${i.surname}`);
        }
    }
}