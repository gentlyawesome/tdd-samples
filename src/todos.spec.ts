import { Todos } from "./todos";

// Async
test("should be able to get posts", async () => {
  const todo = await Todos.getTodos();
  expect(todo.title).toBe("delectus aut autem");
});
