import * as types from './actionType';


export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    payload: {
      task: task,
    }
  }
}

export const updateTask = (id, completed) => {
  console.log(completed, id);
  return {
    type: types.UPDATE_TASK,
    payload: {
      id: id,
      completed: completed
    }
  }
}

export const removeTask = (id) => {
  return { 
    type: types.REMOVE_TASK,
    payload: {
      id: 1
    }
  }
}