/*
//------------------------------- Variables ------------------------------

//Variables
const name = 'Patrick';
const age = 21;

//template string
console.log(`My name is ${ name } and I am ${ age }`);

const s = 'aeiou';

if (s.includes('a')){
    console.log(true);
}
*/

/*Arrays
const numbers = [1, 2, 3, 4, 5];

numbers.push(6);    //push to last
numbers.unshift(0); //push to first

console.log(numbers.includes(1));

console.log(numbers);
*/

//------------------------------- Object Literals ------------------------------
//Object
/*
const person = {
    name: 'Patrick',
    age: 21,
    subjects:[ 'IT140P', 'IT155P', 'CS198L', 'IT145'],
    peripherals: {
        mouse: 'Razer Viper Mini',
        keyboard: 'Reddragon Kumara',
        monitor: 'Samsung Monitor'
    }
}

//add properties to object
person.email = 'mediodia.patrick@gmail.com';

//Destructuring
const { name, age, email, peripherals: {mouse, keyboard, monitor}} = person;

console.log(name, age, mouse, keyboard, monitor, email);
*/
const todos = [
    {
        id: 1,
        text: 'Study IT1454',
        isCompleted: true
    }, 
    {
        id: 2,
        text: 'Study JavaScript',
        isCompleted: false
    }, 
    {
        id: 3,
        text: 'Study Data Structures',
        isCompleted: true
    }, 
];


//convert to JSON
//const todoJSON = JSON.stringify(todos);

/*
//for loop #1
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}
*/

/*
//for loop #2
for (const todo of todos) {
    console.log(todo);
}
*/


//------------------------------- High Order Array Methods ------------------------------

/*
//forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});
*/

/*
//map
const toDoText = todos.map(function(todo) {
    return todo.text;
});

//using arrow funcction
const toDoText = todos.map((todo) => todo.text);

console.log(toDoText);
*/

/*
//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);
*/

/*
//filter and map
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);
*/



//------------------------------- Conditonals ------------------------------
/*
const x = 20;

//if double equal, will not match the data types, only value
if (x == 10) {
    console.log('x is 10');
}

//if triple equal, will  match the data types
if (x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is NOT 10');
}

//ternary operator ?
const y = 11;

//if x > 10 then true, else false
//condition ? if true, if false;
const color = y > 10 ? 'red' : 'blue';

//switch case
switch(color) {
    case 'red':
        console.log('The color is red');
        break;
    case 'blue':
        console.log('The color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}
*/

//------------------------------- Functions ------------------------------
/*
//set default num1 = 1 in parameters addNums(num1 = 1, num2 = 1)
function addNums(num1, num2) {
    return num1 + num2;
}

//arrow function equivalent
//variable, variable name, equal sign, parameters, fat arrow => , brackets
const newAddNums = (num1, num2) => {
    return num1 + num2;
};

//remove brackets and return if only 1 expression
const shortenedAddNums = (num1, num2) => num1 + num2;

//remove brackets and return if only 1 expression
const oneParameter = num1 => num1 + 5;

console.log(oneParameter(1));

//using arrow functions in forEach
todos.forEach(todo => console.log(todo));
*/

//------------------------------- OOP ------------------------------

/*
//constructor function should have capital
function Person(firstName, lastName, age, birthday) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.birthday = new Date(birthday)
}

Person.prototype.getBirthYear = function() {
    return this.birthday.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
*/

//Class - ES6 Implementation

/*
class Person {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.birthday = new Date(birthday)
    }

    getBirthYear() {
        return this.birthday.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

//Instantiation
const person = new Person('Pat', 'Med', 21, '2-22-2001');

console.log(person.getBirthYear());
console.log(person.getFullName());
*/

//------------------------------- DOM ------------------------------
//DOM - DOcument Object Model, Tree Structure of your HTML tags

//Single Element Selectors
//console.log(document.getElementById('my-form'));    //only by id
//console.log(document.querySelector('.container'));  //can be class, id, name, or tags
//console.log(document.querySelector('h1'));

//Multiple Element Selectors
// console.log(document.querySelectorAll('.items')); //always use these
// console.log(document.getElementsByClassName('.items'));
// console.log(document.getElementsByName('.items'));

//get ul items
// const items = document.querySelectorAll('.item');
// items.forEach(item => console.log(item));

//get items list
// const ul = document.querySelector('.items');

// //ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Hello2';
// ul.lastElementChild.innerHTML = '<h1>Hello3</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';



// //add event listener
// const btn = document.querySelector('.btn');
// // addEventListener(event, function)
// //event can be: submit, click, mouseover, mouseout
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();

//     //add css attribute to my-form id object
//     document.querySelector('#my-form').style.background = '#ccc';

//     //add css class to body caleed bg-dark
//     document.querySelector('body').classList.add('bg-dark');

//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
//     //get attributes of clicked object
//     //console.log(e.target.className);
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.value != '' && emailInput.value != '') {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Name: ${nameInput.value} Email: ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    } else {
        msg.classList.add('error');
        msg.innerHTML = 'Fields should not be empty';
        setTimeout(()=> {
                msg.remove();
        }, 3000);
    }
});
