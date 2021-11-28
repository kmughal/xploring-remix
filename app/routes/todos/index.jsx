import { Link } from "remix"

export default function Todos() {

  return (
    <div>
      {" "}
      <nav>
        <h1>Sample</h1>
        <ul>
          <li>
            <Link to="new">Create a New Todo</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}
