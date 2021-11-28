import { Form } from "remix"

import fs from "fs"
import path from "path"
const saveTodo = (todo) => {
  const filePath = path.resolve(__dirname, "../data/todo.json")
  const contents = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf-8" }) ?? []
  )

  contents.push(todo)

  fs.writeFileSync(filePath, JSON.stringify(contents, null, 2))

  return contents
}

export let action = async ({ request }) => {
  const formData = await request.formData()

  let todo = formData.get("todo")
  const allTodos = await saveTodo(todo)
  console.log(allTodos)
  return allTodos
}
export default function NewTodo() {
  return (
    <>
      <Form method="post">
        <label>Todo:</label>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </Form>
    </>
  )
}
