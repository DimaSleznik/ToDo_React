import TodoList from './todo/ToDoList'

function App() {
  const todos = [
    {id: 1,completed:false, title:'купить хлеб'},
    {id: 2,completed:false, title:'молоко'},
    {id: 3,completed:false, title:'работа'}

  ]
  return (
    <div className='wrapper'>
      <TodoList todos ={todos}></TodoList>

    </div>

  )
}

export default App;
