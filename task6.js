const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

function getUserAverageAge(users) {  //nemodifikuoja seno masyvo
  let sum = 0;
  let usersCount = users.length;
  for (const user in users) {
    sum += users[user].age;   // sumuoja visus age 
  }
  return sum / usersCount; //dalina is visu users skaiciaus
}

console.log(getUserAverageAge(users));

function getUsersNames(users) {
    let names = [];
    for (const user in users) {
        let name = users[user].name;
        names.push(name);
      }
      return names;
}

console.log(getUsersNames(users));
