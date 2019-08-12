export const ADD_QA = 'ADD_QA'

export function addTodo(title, answer) {
    return { type: ADD_QA, title, answer }
  }

