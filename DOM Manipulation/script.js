// const body = document.body;

// append all element + string
// body.append('Hello', 'Bye');

// append elements
// body.appendChild('Hello');

// const div = document.createElement('div');
// const strong = document.createElement('strong');

// strong.innerText = 'Hello World2';

// div.innerText = 'Hello World';           //use this
// div.textContent = 'Hello World 2';

// div.appendChild(strong);

// div.innerHTML = "<strong> Hello World Bold </storng>";

// body.append(div);

// ------------------------ Add and Delete Element ---------------------------------

const body = document.body;
const div = document.querySelector('div');
const span1 = document.querySelector('#hi');
const span2 = document.querySelector('#bye');

//remove
span1.remove();

//append it back
div.append(span1);

//remove child of our div, first is easier
//div.removeChild(span1);

// ------------------------ Access Atrributes ---------------------------------

//get id attribute
console.log(span1.getAttribute('id'));
console.log(span1.id);

//add or set attribute
span1.title = 'hello';

//remove attribute
span1.removeAttribute('id');


//get data attribute //data-test = "test" in html
console.log(span1.dataset.test);

//set data attribute
span1.dataset.newProperty = "value";
console.log(span1.dataset.newProperty)

//classlist

//add a class
span1.classList.add('class');
//remove class
span1.classList.remove('class');
//add if not yet there
span1.classList.toggle('class', true);     // if true add, if false remove

//set it to camelCase   background-color
span1.style.backgroundColor = 'red';