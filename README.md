# **Summary**

### 🚀What is Redux?

- Redux is a JavaScript library for state management in JavaScript-based applications. So applications made in ReactJS, Angular, Vue or even Vanilla JavaScript can use redux to manage their application state.
- For example, we have a complex website like social media or an e-commerce application. Now when we build those websites, we have to take care of data syncing (especially in complex web design). And here Redux comes into the game.
- So Redux will store application all data in one place which is **Store** and whenever we want to display any data on any part of our website, we just go to Store and get that data. It’s really simple.

### 🎁Benefits of Redux:

- Centralize the application’s state
- Redux will make Data-flow transparent
- Easily debug our application
- Preserve the page state of the application

### 🔴Disadvantage of Redux:

- Complex to write code
- Have to write a lot of boilerplate code

### 📌When do we use Redux?

- When we have a complex website in terms of dataflow like Facebook, amazon and youtube
- Dataflow is hard to manage

### 📌When didn’t we use Redux?

- Static data website
- Small or medium size of applications

➡️Use redux when needed. Don’t use any tools or language because they are popular. Just Focus on the problem and think about what the best tool is for solving that problem. That’s how programmers think.

# **Summary**

In this section, we see some important concepts of Functional Programming which will help us to understand Redux quickly.

### 🚀What is Functional Programming?

- Functional programming is one of the types of “Programming paradigms” (means - the methods or we can say a set of rules to structure our code to solve a problem).
- Type of programming paradigms:
    1. Procedural programming
    2. Logical programming
    3. Functional programming
    4. Object Oriented programming
- So in functional programming, we create small and reusable functions and by combining them we create another function for solving problems.
- JavaScript is a multi paradigms language. It supports Object Oriented Programming and Functional programming both.

### 📖Basics of Functions:

- In JavaScript, functions are *first-class citizens*. So we treat the functions as any other variable. For example, we can assign them in a variable. we can pass them as an argument, or we can even return them from another function.

### 📌Higher-order functions:

- A higher-order function is a function that takes a function as a parameter or which returns the function or both, then we call them a higher-order function.

`1. // Example 1
2. setTimeout(() => {
3. 	console.log('Runs after 5s');
4. }, 5000);
5.  
6. // Example 2
7. const numbers = [10, 20, 30, 40];
8. const newArray = numbers.map(n => n + 5);`

### 📌Function Composition:

- When we pass one function’s output to another function's parameter then it is function composition.

`1. let username = "   Harley   ";
2. let message = "Hello " + username.trim() + " Good Morning!";
3.  
4. const trim = (name) => name.trim();
5. const generateMessage = (name) => `Hello ${name}, Good Morning!`;
6. const convertToUpper = (name) => name.toUpperCase();
7.  
8. const result = generateMessage(convertToUpper(trim(username))); // This is function composition
9. console.log(result);`

### 📌Currying:

- Currying is a technique that allows us to take a function with multiple arguments and convert it into a function that has a single argument.

`1. // Before applying Currying
2. const multi = (a, b) => a * b;
3. let result = multi(2, 5);
4.  
5. // After applying Currying
6. const multiple = (a) => (b) => a * b;
7. let newResult = multiple(2)(5);`

### 📌Pure Functions:

- Pure function is a function that always gives the same output if we give it the same input.
- In Pure functions
    - there is no Current Date/Time
    - No random values
    - No Global state
    - No Database calls

`1. // Example 1
2. function double(a) {
3.   return a * 2;
4. }
5.  
6. double(5) // Output 10
7. double(5) // Output 10
8. double(5) // Output 10
9. // so this is double is Pure Function.
10.  
11. // Example 2
12. function randomNumber(a) {
13.     return a * Math.random();
14. }
15.  
16. randomNumber(5); // Output 0.13411
17. randomNumber(5); // Output 0.32232
18. randomNumber(5); // Output 1.0323
19. // so this is randomNumber is NOT Pure Funtion.`

### 🚀What is Immutability?

- Basically, immutability is, Once we created a variable or string or object or array, it cannot be changed.
- If you want to change that, we have to make a copy first of that variable or string or object or array and then we can update that copy.

📌**Two ways to update immutable objects in JavaScript.**

First one is object assign method.

```jsx
const employee = {
  name: "John",
  age: 25,
}

const newEmployee = Object.assign({}, employee, { name: "Pepe" });
console.log(newEmployee);
```

And second one is using spread operator.

```jsx
let user = {
  name: "John",
  age: 25,
};

const newUser = { 
  ...user,
  children: [
    { 
      name: "Mary",
      age: 5
    },
    {
      name: "Nick",
      age: 3
    }],
  location: "Philadelphia" 
};

console.log(newUser);
```

### 📌Immutability with Objects:

`1. const employee = {
2.     name: "Harley",
3.     age: 22,
4.     company: { country: "Cananda", city: "Toronto" },
5. };
6.  
7. // Method 1 Object.assign method
8. const newEmployee = Object.assign({}, employee, { name: "Martin" });
9.  
10. // Method 2 Spread Operator
11. const newEmployee = {
12.     ...employee,
13.     name: "Martin",
14.     company: { ...employee.company, city: "Calgary" },
15. };
16.` 

### 📌Immutability with Arrays:

`1. const numbers = [10, 20, 30, 40];
2.  
3. // Adding Items
4. const index = numbers.indexOf(30);
5. const addedNumbers = [...numbers.slice(0, index), 50, ...numbers.slice(index)];
6.  
7. // Updating Items
8. const updated = numbers.map((a) => (a === 40 ? 80 : a));
9.  
10. // Removing Items
11. const removed = numbers.filter((a) => a !== 30);
12. console.log(removed);`