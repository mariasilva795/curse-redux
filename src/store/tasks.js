
// Action types
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

// Action creators
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      task: task,
    }
  }
}

export const updateTask = (id, completed) => {
  return {
    type: UPDATE_TASK,
    payload: {
      id: id,
      completed: completed
    }
  }
}

export const removeTask = (id) => {
  return { 
    type: REMOVE_TASK,
    payload: {
      id: 1
    }
  }
}

// Reducer
let id = 0; 
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false
        }
      ];
    case UPDATE_TASK:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: action.payload.completed
          }
        }
        return task;
      });
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
}
