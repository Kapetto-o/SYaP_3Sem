{
    // ЗАДАНИЕ №1
     class Task {
        constructor(id, name, completed = false) {
            this.id = id;
            this.name = name;
            this.completed = completed;
        }

        setName(newName) {
            this.name = newName;
        }
    
        toggleCompleted() {
            this.completed = !this.completed;
        }
    }        

    // ЗАДАНИЕ №2
    class Todolist {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            this.tasks = [];
        }
    
        addTask(task) {
            this.tasks.push(task);
        }
    
        filterTasks(completedStatus) {
            return this.tasks.filter(task => task.completed === completedStatus);
        }
    
        setName(newName) {
            this.name = newName;
        }
    }

    // ИСПОЛЬЗОВАНИЕ КЛАССОВ
    let task1 = new Task(1, 'Начать делать лабораторную работу', true);
    let task2 = new Task(2, 'Выпить чаю', true);
    let task3 = new Task(3, 'Закончить делать лабораторную работу', true);
    let task4 = new Task(4, 'Сдать все лабораторные работы');

    let myTodolist = new Todolist(1, 'Мой список дел');

    myTodolist.addTask(task1);
    myTodolist.addTask(task2);
    myTodolist.addTask(task3);
    myTodolist.addTask(task4);

    console.log('Задачи:');
    // console.log(myTodolist.tasks);
    console.log(JSON.parse(JSON.stringify(myTodolist.tasks)));

    let completedTasks = myTodolist.filterTasks(true);
    console.log('Выполненные задачи:');
    console.log(completedTasks);

    task4.setName('Сдать лабораторную работу №11');
    task4.toggleCompleted();    

    console.log('Задачи:');
    // console.log(myTodolist.tasks);
    console.log(JSON.parse(JSON.stringify(myTodolist.tasks)));
}