import { Outlet, useLoaderData } from "remix"
import fs from "fs"
import path from "path"
export let loader = () => {
  const filePath = path.resolve(__dirname, "../data/todo.json")

  const result = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf-8" }) ?? []
  )

  return result
}
export default function TodoList() {
  const todos = useLoaderData(loader)

  return (
    <>
      <main>
        <Outlet />
      </main>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  )
}
