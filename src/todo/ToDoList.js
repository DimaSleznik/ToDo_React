import React from "react";
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: "none",
    color: "black",
  },
  li: {
    color: "white",
  },
};
export default function TodoList(props) {
  return (
    
    <ul style={styles.ul}>
       <h1>React project</h1>
      {props.todos.map((todo,index)=>{
          return <TodoItem todo ={todo} key ={todo.id} index={index}></TodoItem>
      })}

      

    </ul>
  );
}
