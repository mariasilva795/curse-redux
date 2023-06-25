import * as types from './actionType';

let id = 0; 

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false
        }
      ];
    case types.UPDATE_TASK:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: action.payload.completed
          }
        }
        return task;
      });
    case types.REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
}
