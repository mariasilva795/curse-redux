import store from "./store/configureStore";
import { addTask, updateTask, removeTask } from "./store/tasks";

store.dispatch(addTask('Buy milk'));
console.log(store.getState());


store.dispatch(updateTask(1, true));
console.log(store.getState());


// store.dispatch(removeTask('1'));
// console.log(store.getState());

