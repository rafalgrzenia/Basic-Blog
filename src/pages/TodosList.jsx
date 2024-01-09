import { useLoaderData } from "react-router-dom";
import { getTodos } from "../functions/todos";

export function TodosList() {
  const todos = useLoaderData();

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.completed ? "strike-through" : ""}`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todosRoute = {
  loader,
  element: <TodosList />,
};
