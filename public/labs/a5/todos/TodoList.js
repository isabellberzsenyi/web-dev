import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
  return(`
      <ul>
        ${
          todos.map(todo => {
            return(TodoItem(todo));
          })
        }
      </ul>
  `);
}
export default TodoList;
