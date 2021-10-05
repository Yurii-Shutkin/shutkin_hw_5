// Task 1

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.surname;

// console.log (user);

// Task 2

const user = {
    name: 'John',
};

user.name = 'Pete'; // да, это будет работать

console.log (user.name);

// Task 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
};

console.log (sum);