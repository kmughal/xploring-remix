import { Link, Outlet, useLoaderData } from "remix"
import fs from "fs"
import path from "path"
import TodoList from "./TodoList"

export let loader = () => {
  const filePath = path.resolve(__dirname, "../data/todo.json")

  const result = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf-8" }) ?? []
  )
  console.log({ result })
  return result
}
export default function Todos() {
  const list = useLoaderData(loader)
  console.log(list)
  return (
    <>
      <h1>Sample</h1>
      <p>
        <Link to="new">Create a New Todo</Link>
      </p>
      <TodoList todos={list} />
      <main>
        <Outlet />
      </main>
    </>
  )
}
