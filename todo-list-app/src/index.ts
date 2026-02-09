import { TodoItem } from "./models/todoItem";
import { TodoList } from "./services/todoList";
import {
  TodoContent,
  isDatedTodo
} from "./utils/typeGuards";

const todoList = new TodoList<TodoContent>();

const todo1 = new TodoItem(1, {
  message: "TypeScript tanulás",
  category: "tanulás"
});

const todo2 = new TodoItem(2, {
  message: "Beadandó leadása",
  dueDate: new Date("2026-02-15"),
  category: "iskola"
});

todoList.addItem(todo1);
todoList.addItem(todo2);

console.log("Összes teendő:");
todoList.listItems().forEach(item => {
  if (isDatedTodo(item.content)) {
    console.log(
      `${item.content.message} határidő: ${item.content.dueDate.toDateString()}`
    );
  } else {
    console.log(`${item.content.message}`);
  }
});

console.log("'iskola' kategória:");
console.log(todoList.filterByCategory("iskola"));

todoList.deleteItem(1);
