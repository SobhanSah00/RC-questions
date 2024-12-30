import {useState} from "react"
import './App.css'

function App() {
  const [inputTodo,setInputTodo] = useState("")
  const [createTodo,setCreateTodo] = useState([])
  const [editing, setEditing] = useState(false)

  const addTodo =() => {
    if(inputTodo.trim() !== ""){
      const newTodoObj = {
        id: Date.now(),
        text : inputTodo
      }
      setCreateTodo([...createTodo,newTodoObj])
      setInputTodo("")
    }
  }
  // const deleteTodo = (id) => {
  //   const newTodo = createTodo.filter(todo => todo.id !== id)
  // }
  return (
    <>
      <div>
        <input type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button  onClick={addTodo}>Add Todo</button>

        {
          createTodo.map((todo) => (
            
          ))
        }
      </div>
    </>
  )
}

export default App
