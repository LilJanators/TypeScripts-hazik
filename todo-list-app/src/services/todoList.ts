import { TodoItem } from "../models/todoItem";
import { LogAddition } from "../decorators/logAddition";

export class TodoList<T extends { category: string }> {
  private items: Map<number, TodoItem<T>> = new Map();

  @LogAddition
  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
    console.log(`Item added (id: ${item.id})`);
  }

  deleteItem(id: number): void {
    if (this.items.delete(id)) {
      console.log(`Item deleted (id: ${id})`);
    } else {
      console.log(`Item not found (id: ${id})`);
    }
  }

  listItems(): TodoItem<T>[] {
    return Array.from(this.items.values());
  }

  filterByCategory(category: string): TodoItem<T>[] {
    return this.listItems().filter(
      item => item.content.category === category
    );
  }
}
