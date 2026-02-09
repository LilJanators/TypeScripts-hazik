export type TextTodo = {
  message: string;
  category: string;
};

export type DatedTodo = {
  message: string;
  dueDate: Date;
  category: string;
};


export type TodoContent = TextTodo | DatedTodo;


export function isDatedTodo(content: TodoContent): content is DatedTodo {
  return "dueDate" in content;
}

export function isTextTodo(content: TodoContent): content is TextTodo {
  return !("dueDate" in content);
}
