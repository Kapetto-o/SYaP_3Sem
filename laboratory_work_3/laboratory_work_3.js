// ЗАДАНИЕ №1
{
    console.log("\nЗАДАНИЕ №1\n");
    const arr = [1, [1, 2, [3, 4]], [2, 4]];

    const flattenArray = (array) => array.reduce((acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(flattenArray(val));
      }
      return acc.concat(val);
    }, []);
    
    console.log(flattenArray(arr)); // [1, 1, 2, 3, 4, 2, 4]
}
// ЗАДАНИЕ №2
{
  console.log("\nЗАДАНИЕ №2\n");
  const arr = [1, [1, 2, [3, 4]], [2, 4]];

  const sumArray = (array) => array.reduce((sum, val) => {
    if (Array.isArray(val)) {
      return sum + sumArray(val);
    }
    return sum + val;
  }, 0);
  
  console.log(sumArray(arr)); // 17
  
}
// ЗАДАНИЕ №3
{
  console.log("\nЗАДАНИЕ №3\n"); 
  const groupStudentsByGroupId = (students) => {
    return students.reduce((acc, student) => {
      if (student.age > 17) {
        if (acc[student.groupId]) {
          acc[student.groupId].push(student);
        } else {
          acc[student.groupId] = [student];
        }
      }
      return acc;
    }, {});
  };
  
  // Пример использования
  const students = [
    { name: 'Илья', age: 18, groupId: 1 },
    { name: 'Яша', age: 17, groupId: 2 },
    { name: 'Маща', age: 19, groupId: 1 },
    { name: 'Саша', age: 20, groupId: 2 },
  ];
  
  console.log(groupStudentsByGroupId(students));
}
// ЗАДАНИЕ №4
{
  console.log("\nЗАДАНИЕ №4\n"); 
  function asciiDifference(str) {
    const total1 = str.split('').map(char => char.charCodeAt(0)).join('');
    
    const total2 = total1.replace(/7/g, '1');
    
    return Number(total1) - Number(total2);
  }
  
  console.log(asciiDifference('ABC')); // 656667 - 656661 = 6
  
}
// ЗАДАНИЕ №5
{
  console.log("\nЗАДАНИЕ №5\n");
  function extend(...objects) {
    return Object.assign({}, ...objects);
  }
  
  console.log(extend({a: 1, b: 2}, {c: 3})); // {a: 1, b: 2, c: 3}
  
  console.log(extend({a: 1, b: 2}, {c: 3}, {d: 4})); // {a: 1, b: 2, c: 3, d: 4}
  
  console.log(extend({a: 1, b: 2}, {a: 3, c: 3})); // {a: 3, b: 2, c: 3}    
}
// ЗАДАНИЕ №6
{
  console.log("\nЗАДАНИЕ №6\n");
  function buildTower(floors) {
    const tower = [];
  
    for (let i = 0; i < floors; i++) {
      const spaces = ' '.repeat(floors - i - 1);
      const stars = '*'.repeat(2 * i + 1);
      tower.push(`${spaces}${stars}${spaces}`);
    }
  
    return tower;
  }
  
  console.log(buildTower(3));
  //   "  *  ",
  //   " *** ",
  //   "*****"
  
  console.log(buildTower(5));
  //   "    *    ",
  //   "   ***   ",
  //   "  *****  ",
  //   " ******* ",
  //   "*********"
}