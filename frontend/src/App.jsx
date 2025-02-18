import { useEffect, useState } from 'react'
import TodoPage from './components/todoPage'

import { Render } from './Render'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos)
    })

  },
  [])
  

  return (
      <div>
      <TodoPage></TodoPage>
      <Render todos={todos}></Render>
      </div>
     
    
  )
}

export default App
