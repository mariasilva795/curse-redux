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

### 🚀How redux work?

- We store all our application state (data) in a single place called Store. Imagine Store as Database for frontend.
- There are 3 main parts of Redux
    - Store - which stores all data
    - Reducer - function which will add, update and delete data (How to do)
    - Actions - which will define which task we want to perform (What to do)
- We can only change store data using the Reducer function.
- For example, we have a to-do application. We want to add a new task. So
    - Action - ADD_TASK
    - Reducer - perform how to add task in the store

### 📌4 steps to implement Redux:

- Designing the store - How store object looks like
- List actions - that can perform in the application.
- Create Reducer - function to define How to perform that action
- Create redux store

### 💻Creating Reducer function:

- A reducer is a pure function that takes two arguments. The first one is the Initial or Current state and the second one is the action object.
- Inside this function, we use If..else or we can use Switch case to identify the action type.

`1. let id = 0;
2.  
3. export default function reducer(state = [], action) {
4.     switch (action.type) {
5.         case ADD_TASK:
6.             return [
7.                 ...state,
8.                 {
9.                     id: ++id,
10.                     task: action.payload.task,
11.                     completed: false,
12.                 },
13.             ];
14.  
15.         case REMOVE_TASK:
16.             return state.filter((task) => task.id !== action.payload.id);
17.  
18.         case TASK_COMPLETED:
19.             return state.map((task) =>
20.                 task.id === action.payload.id
21.                     ? {
22.                           ...task,
23.                           completed: true,
24.                       }
25.                     : task
26.             );
27.  
28.         default:
29.             return state;
30.     }
31. }`

### 📜Configure redux store

- For creating a redux store we have a function in the redux library called createStore and we have to just pass our Root reducer as a parameter.

`1. import { legacy_createStore as createStore } from "redux";
2. import reducer from "./tasks";
3.  
4. const store = createStore(reducer);
5.  
6. export default store;`

### 🧑🏻‍💻Dispatch action from store

- For dispatching any action, we have to use store.dispatch method and then we pass our action object with type property (which is the action name) and payload property (in which we can pas data related to action).

`1. store.dispatch({ type: "ADD_TASK", payload: { task: "Add new task"} });`

### 🔔Subscribe and unsubscribe method

- As we use Subscribe feature on YouTube, store.subscribe method is also used to get notified when we have something change in our store object.

`1. store.subscribe(() => {
2.     console.log("Updated", store.getState());
3. });`

- This callback function will run on every change on the redux store.
- Now if we want to stop this subscribe method we have to use unsubscribe.

`1. const unsubscribe = store.subscribe(() => {
2.     console.log("Updated", store.getState());
3. });
4. unsubscribe();`