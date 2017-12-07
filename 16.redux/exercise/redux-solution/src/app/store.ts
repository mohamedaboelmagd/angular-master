import { tassign } from 'tassign';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions';

export interface IAppState {
  todos: any[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

class TodoActions {
  constructor(private state, private action) { }

  addTodo() {
    const newTodo = { id: this.state.todos.length + 1, title: this.action.title };

    return tassign(this.state, {
      // Instead of the push() method, we use the concat() method because the former mutates
      // the original array, whereas the latter returns a new array.
      todos: this.state.todos.concat(newTodo),
      lastUpdate: new Date()
    });
  }

  toggleTodo() {
      // When modifying an item in an array, we should create a new array, and copy
      // all other item from the source array (except the item to be modified). At the same time
      // we should create a copy of the item to be modified and apply the mutations using tassing.

      // So, first we need to find the item to be modified. Here, we are finding it by it's id.
      const todo = this.state.todos.find(t => t.id === this.action.id);

      // Now, we need to find the position of this item in the array.
      const index = this.state.todos.indexOf(todo);

      return tassign(this.state, {
        todos: [
          // Using the slice() method, we can slice an array. This method does not mutate the
          // original array, and returns a new array. So here, we're getting all the items from
          // the beginning to the index of the item we're going to modiy.
          //
          // We use the spread operator (...) to enumerate an array. This is a clean way to
          // concat two arrays. Instead of
          //
          // var newArray = [];
          // newArray.concat(sourceArray1).concat(sourceArray2);
          //
          // We can write:
          //
          // var newArray = [...sourceArray1, ...sourceArray2];
          ...this.state.todos.slice(0, index),

          // So, we have copied all the items before the item to be modified. Now, we take a copy
          // of this item and apply the mutation (isCompleted).
          tassign(todo, { isCompleted: !todo.isCompleted }),

          // Now, we need to copy all the items after this item. Again, we use the slice() method
          // to get all the items following that item, and use the spread operator to enumerate
          // them and put them in our target array.
          ...this.state.todos.slice(index + 1),
        ],
        lastUpdate: new Date()
      });

  }

  removeTodo() {
    return tassign(this.state, {
      todos: this.state.todos.filter(t => t.id !== this.action.id),
      lastUpdate: new Date()
    });
  }

  clearTodos() {
    return tassign(this.state, {
      todos: [],
      lastUpdate: new Date()
    });
  }
}

export function rootReducer(state: IAppState, action): IAppState {
  const actions = new TodoActions(state, action);
  switch (action.type) {
    case ADD_TODO: return actions.addTodo();
    case TOGGLE_TODO: return actions.toggleTodo();
    case REMOVE_TODO: return actions.removeTodo();
    case CLEAR_TODOS: return actions.clearTodos();
  }

  return state;
}