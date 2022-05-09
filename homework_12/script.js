async function fetchUsers() {
    const response = await fetch('https://reqres.in/api/users?per_page=12');
    const result = await response.json();
    console.log(result.data)
}

fetchUsers();

// фамилии помещаю в массив и вывожу его, чтобы удобнее отображалось в консоли
async function fetchUsersLastNames() {
    let lastNames = []
    const response = await fetch('https://reqres.in/api/users?per_page=12');
    const result = await response.json();
    result.data.forEach(user => {
        lastNames.push(user.last_name);
    });
    console.log(lastNames);
}

fetchUsersLastNames();

 async function fetchUsersStartsWithF() {
     const response = await fetch('https://reqres.in/api/users?per_page=12');
     const result = await response.json();
     let startsWithF = await result.data.filter(user => user.last_name.startsWith("F"));
     console.log(startsWithF);
 }

fetchUsersStartsWithF();

async function fetchUsersNamesString() {
    const response = await fetch('https://reqres.in/api/users?per_page=12');
    const result = await response.json();
    let names = result.data.reduce((acc, user) => {
        acc += ` ${user.first_name} ${user.last_name},`
        return acc;
    }, "Наша база содержит данные следующих пользователей:");
    let resultNames = names.slice(0, names.length - 1) + "!"
    console.log(resultNames);
}

fetchUsersNamesString();

async function fetchUsersKeys() {
    const response = await fetch('https://reqres.in/api/users?per_page=12');
    const result = await response.json();
    console.log(Object.getOwnPropertyNames(result.data[1]))
}

fetchUsersKeys();