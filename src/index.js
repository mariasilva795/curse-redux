import store from "./store";
import {addTask, removeTask, updateTask} from "./action";

store.dispatch(addTask('Buy milk'));
console.log(store.getState());


store.dispatch(updateTask(1, true));
console.log(store.getState());


// store.dispatch(removeTask('1'));
// console.log(store.getState());

