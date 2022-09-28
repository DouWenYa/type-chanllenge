interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
// Pick
type MyPick<U, K extends keyof U> = {
    [k in K]: U[k];
};
console.log(todo.completed)
export default {}