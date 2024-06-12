// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// // Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person12 = { name: 'John', age: 30 };
function age()
{
  if(person12.age>=0 && person12.age<=12)
{
  return 'Child';
}
else if(person12.age>=13 && person12.age<=19)
  return 'Teen';
  else if(person12.age>=20 && person12.age<=59)
    return 'Adult';
else
  {
    return 'Senior'
  }
}
age()


// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };

function total(inventory2){
  console.log(inventory2.apples+inventory2.bananas+inventory2.oranges)
}

total(inventory2)

//another way

let tot = 0;
const arrr = Object.values(inventory2);
arrr
arrr.forEach((item)=>{
  tot += item;
})
tot

// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']

function get(students3)
{
  return Object.values(students3)
   
}

const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
get(students3)
 

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };

function property(details4)
{
  return Object.values(details4).every(item => item !== null && item !== undefined && item !== '');

}
console.log(property(details4));


// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };

function take(products5)
{
  const values = Object.values(products5)
  const sum = values.reduce((acc, product) => acc + product.price, 0);
  return sum/values.length

}
console.log(take(products5))


// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };

function score(scores6)
{
  const values = Object.values(scores6)  
  const max = Math.max.apply(null, Object.values(scores6));
  console.log(max)
}
score(scores6)

// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
 

const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };

function average(employees7) {
  const values = Object.values(employees7);
  const sum = values.reduce((acc, employee) => acc + employee.salary, 0);
  return sum/values.length;
}

average(employees7);


// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data = { name: 'John', age: 25, city: 'New York' };
function ascending(data)
{
  const values = Object.values(data)
  return values.sort()
}
ascending(data)


// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };

function calculate(order9)
{
  const sum = order9.quantity * order9.price;
  return sum
}
calculate(order9)


// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };

let spent = 0;
const amt = Object.values(expenses10);
amt
amt.forEach((item)=>{
  spent += item;
})
spent

