import fetch from "cross-fetch";

export const getTodo = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response: any) => response.json())
    .then((json: any) => json);
};
