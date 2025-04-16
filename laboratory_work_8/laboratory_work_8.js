{
    //1
    let  user = {
        name: 'Masha',
        age: 21
    };
    // 2
    let numbers = [1, 2, 3];
    // 3
    let user1 = {
        name: 'Masha',
        age: 23,
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    };
    // 4
    let user2 = {
        name: 'Masha',
        age: 28,
        skills: ["HTML", "CSS", "JavaScript", "React"]
    };
    // 5
    const array = [
        {id: 1, name: 'Vasya', group: 10}, 
        {id: 2, name: 'Ivan', group: 11},
        {id: 3, name: 'Masha', group: 12},
        {id: 4, name: 'Petya', group: 10},
        {id: 5, name: 'Kira', group: 11},
    ]
    // 6
    let user4 = {
        name: 'Masha',
        age: 19,
        studies: {
            university: 'BSTU',
            speciality: 'designer',
            year: 2020,
            exams: {
                maths: true,
                programming: false
            }
        }
    };
    // 7
    let user5 = {
        name: 'Masha',
        age: 22,
        studies: {
            university: 'BSTU',
            speciality: 'designer',
            year: 2020,
            department: {
                faculty: 'FIT',
                group: 10,
            },
            exams: [
                { maths: true, mark: 8},
                { programming: true, mark: 4},
            ]
        }
    };
    // 8 
    let user6 = {
        name: 'Masha',
        age: 21,
        studies: {
            university: 'BSTU',
            speciality: 'designer',
            year: 2020,
            department: {
                faculty: 'FIT',
                group: 10,
            },
            exams: [
                { 
            maths: true,
            mark: 8,
            professor: {
                name: 'Ivan Ivanov ',
                degree: 'PhD'
            }
             },
                { 
            programming: true,
            mark: 10,
            professor: {
                name: 'Petr Petrov',
                degree: 'PhD'
            }
             },
            ]
        }
    };
    // 9
    let user7 = {
        name: 'Masha',
        age: 20,
        studies: {
            university: 'BSTU',
            speciality: 'designer',
            year: 2020,
            department: {
                faculty: 'FIT',
                group: 10,
            },
            exams: [
                { 
            maths: true,
            mark: 8,
            professor: {
                name: 'Ivan Petrov',
                degree: 'PhD',
                articles: [
                            {title: "About HTML", pagesNumber: 3},
                            {title: "About CSS", pagesNumber: 5},
                            {title: "About JavaScript", pagesNumber: 1},
                        ]
            }
             },
                { 
            programming: true,
            mark: 10,
            professor: {
                name: 'Petr Ivanov',
                degree: 'PhD',
                articles: [
                            {title: "About HTML", pagesNumber: 3},
                            {title: "About CSS", pagesNumber: 5},
                            {title: "About JavaScript", pagesNumber: 1},
                        ]
            }
             },
            ]
        }
    };
    // 10
    let store = {
        state: {    // 1 уровень
            profilePage: {  // 2 уровень
                posts: [    // 3 уровень
                    {id: 1, message: 'Hi', likesCount: 12},
                    {id: 2, message: 'By', likesCount: 1},
                ],
                newPostText: 'About me',
            },
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Valera'},
                    {id: 2, name: 'Valera'},
                    {id: 3, name: 'Valera'},
                    {id: 4, name: 'Valera'},
                ],
                messages: [
                    {id: 1, message: 'hi'},
                    {id: 2, message: 'hi hi'},
                    {id: 3, message: 'hi hi hi'},
                ],
            },
            sidebar: [],
        },
    }
    // ЗАДАНИЕ №1
    //1
    let userCopy = {...user}
    //2
    let numbersCopy = [...numbers];
    //3
    let user1Copy = {...user1, location: {...user1.location}}
    //4
    let user2Copy = {...user2, skills: [...user2.skills]}
    //5
    const arrayCopy = array.map(e1 => ({...e1}));
    //6
    let user4Copy = {
        ...user4,
        studies: {
            ...user4.studies,
            exams: {...user4.studies.exams}
        }
    };
    //7
    let user5Copy = {
        ...user5,
        studies: {
            ...user5.studies,
            department: {
                ...user5.studies.department
            },
            exams: [...user5.studies.exams]
        }
    };
    //8
    let user6Copy = {
        ...user6,
        studies: {
            ...user6.studies,
            department: {...user6.studies.department},
            exams: [...user6.studies.exams.map(exam => ({ ...exam }))]
        }
    };
    //9
    let user7Copy = { 
        ...user7, 
        studies: { 
            ...user7.studies, 
            department: { ...user7.studies.department }, 
            exams: [...user7.studies.exams.map(exam => ({
                ...exam, 
                professor: { 
                    ...exam.professor, 
                    articles: [...exam.professor.articles.map(article => ({ ...article }))]
                }
            }))]
        } 
    };
    //10
    let storeCopy = {
        state: {
            ...store.state,
            profilePage: {
                ...store.state.profilePage,
                posts: [...store.state.profilePage.posts.map(post => ({ ...post }))]
            },
            dialogsPage: {
                ...store.state.dialogsPage,
                dialogs: [...store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog }))],
                messages: [...store.state.dialogsPage.messages.map(message => ({ ...message }))]
            },
            sidebar: [...store.state.sidebar]
        }
    };
    
    console.log("ЗАДАНИЕ №1");
    console.log({userCopy, numbersCopy, user1Copy, user2Copy, arrayCopy, user4Copy, user5Copy, user6Copy, user7Copy, storeCopy });
    // ЗАДАНИЕ №2
    user5Copy.studies.department.group = 12;
    user5Copy.studies.exams[1].mark = 10;

    console.log("ЗАДАНИЕ №2");
    console.log(user5Copy);
    // ЗАДАНИЕ №3
    user6Copy.studies.exams[1].professor.name = 'Yasha';

    console.log("ЗАДАНИЕ №3");
    console.log(user6Copy);
    // ЗАДАНИЕ №4
    console.log({user7});
    user7Copy.studies.exams[0].professor.name = 'novi';

    user7Copy.studies.exams[1].professor.articles.find(article => article.title === 'About CSS').pagesNumber = 3;

    console.log("ЗАДАНИЕ №4");
    console.log(user7Copy);
    // ЗАДАНИЕ №5
    storeCopy.state.dialogsPage.messages.forEach(message => {
        message.message = "Hello";
    });

    console.log("ЗАДАНИЕ №5");
    console.log(storeCopy);
}