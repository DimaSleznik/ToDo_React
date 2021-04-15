import React from 'react';

const styles = {
    li:{ 
       display:'flex',
       justifyContent:'space-between',
       alignItems:'center',
       padding:'.5rem 1rem',
       border:'1px solid #ccc',
       borderRadius:'4px',
       marginBotton:'.5rem'
    },
    button:{ 
        backGroundColor:'white'
    }
}
export default function TodoItem({todo,index}){

    return (
        <li style = {styles.li}>
            <span>
                <input type ='checkbox'></input>
                {index+1+'  '+todo.title}
            </span>
            <button style = {styles.button}>&times;</button>
        </li>
    )
}