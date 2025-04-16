// ЗАДАНИЕ №1
{
    console.log("\nЗАДАНИЕ №1\n");
    {
        const numbers = [1, 2, 3];
        const [y] = numbers;        // y=1
        console.log(y);     
    }
}
// ЗАДАНИЕ №2
{
    console.log("\nЗАДАНИЕ №2\n");
    {
        const user = { name: 'Яша', age: 20 };
        const admin = { ...user, admin: true };
        console.log(admin);
    }
}
// ЗАДАНИЕ №3
{
    console.log("\nЗАДАНИЕ №3\n");
    {
        let store = {
            state: {    // 1 уровень
                profilePage: {  // 2 уровень
                    posts: [    // 3 уровень
                        { id: 1, message: 'Hi', likesCount: 12 },
                        { id: 2, message: 'By', likesCount: 1 }
                    ],
                    newPostText: 'About me'
                },
                dialogsPage: {
                    dialogs: [
                        { id: 1, name: 'Valera' },
                        { id: 2, name: 'Andrey' },
                        { id: 3, name: 'Sasha' },
                        { id: 4, name: 'Viktor' }
                    ],
                    messages: [
                        { id: 1, message: 'hi' },
                        { id: 2, message: 'hi hi' },
                        { id: 3, message: 'hi hi hi' }
                    ]
                },
                sidebar: []
            }
        };
        
        // Деструктуризация
        let {
            state: {
                profilePage: { posts },
                dialogsPage: { dialogs, messages }
            }
        } = store;
        
        posts.forEach(post => console.log(post.likesCount));
        
        const evenIdDialogs = dialogs.filter(dialog => dialog.id % 2 === 0);
        console.log(evenIdDialogs);
        
        const updatedMessages = messages.map(message => ({ ...message, message: 'Hello user' }));
        console.log(updatedMessages);
    }
}
// ЗАДАНИЕ №4
{
    console.log("\nЗАДАНИЕ №4\n");
    {
        let tasks = [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false },
            { id: 4, title: "Rest API", isDone: false },
            { id: 5, title: "GraphQL", isDone: false }
        ];
        
        let task2 = { id: 6, title: "CallYasha", isDone: false };
        
        tasks = [...tasks, task2];
        
        console.log(tasks);
    }
}
// ЗАДАНИЕ №5
{
    console.log("\nЗАДАНИЕ №5\n");
    {
        function sumValues(x, y, z) {
            return x + y + z;
        }
        
        const values = [1, 2, 3];
        const result = sumValues(...values);
        
        console.log(result);
    }
}