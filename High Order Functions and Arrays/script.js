const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEeach - iterate through all array items
//filter - filter all array items and return a list
//map - do operations on all array items return a list
//reduce - reduce an array to a single value

//------------------------- for loop -----------------------------------
//for loop
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }


//------------------------- forEach -----------------------------------
// companies.forEach((company, index, companies)=> {
//   console.log(company);
// });


//------------------------- filter -----------------------------------
let canDrink = [];

//loop through list and filter, then push
// ages.forEach((age, index, ages)=> {
//   if(age >= 21){
//     canDrink.push(age);
//   }
// });

//filter list using if
// canDrink = ages.filter(age => {
//   if(age >= 21){
//     return true;
//   }
// });

// canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);


//Filter retail companies

//Filter by retail category
// let retailCompanies = companies.filter(company => company.category === 'Retail');


//get 80s companies
// let eightiesCompaies = companies.filter(
//   company => company.start >= 1980 && company.start <= 1989
// );

// console.log(eightiesCompaies);


//companies that lasted more than 10 years
// let moreThanTenYears = companies.filter(company => {
//   let companyAge = company.end - company.start;
//   return companyAge >= 10 ? true : false;
// });

//better approach
// let moreThanTenYears = companies.filter(company =>
//   company.end - company.start >= 10
// );

// console.log(moreThanTenYears);

//------------------------- Map -----------------------------------

//create array of company names

// const companyNames = companies.map(company => company.name);

// const companyStartEnd = companies.map(company => 
//   `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(companyStartEnd);


//use ages array and each value squared 
// const agesSquare = ages.map(age => Math.sqrt(age));

// //multiply each age by 2
// const ageDouble = ages.map(age => age * 2);

// //do both operations
// const ageSquareAndDouble = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);
  
// console.log(ageSquareAndDouble)


//------------------------- Sort -----------------------------------

//Note: Return 1 if you want first parameter
//      Return -1 if you want second parameter

//sort companies by start date

// const sortedCompanies = companies.sort((c1, c2) => {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//sort handed version
// const sortedCompanies = companies.sort((a, b) => 
//   a.start > b.start ? 1 : -1
// );

// console.log(sortedCompanies);


//sort ages ascending
// const sortedAges = ages.sort((a, b) =>
//   a > b ? 1 : -1
// );

//sort ages shorter
// const sortedAges = ages.sort((a, b) => a - b);

//sort ages shorter descending
// const sortedAges = ages.sort((a, b) => b - a);

// console.log(sortedAges);

//------------------------- Reduce -----------------------------------

let totalAge = 0;

//for loop version
// ages.forEach(age => totalAge += age);

//reduce
// totalAge = ages.reduce((total, age) => total + age, 0);
// console.log(totalAge)

let totalYears = 0;

//total years for all companies

//varialble = array.reduce((total, item) => total + item, 0); //meaning start at 0

// totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);



//------------------------- Combine Methods -----------------------------------
const combined = ages
  .map(age => age * 2)
  .filter(age => age >=  40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined)
