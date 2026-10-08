import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTask] = useState([]);
    
    const addTask = (vv) => {
        return setTask([...todoList, vv])
        // console.log(todoList);
    }

    const deleteBtn = (index) => {
        // return setTask(todoList.splice(index, 1));
        return setTask(todoList.filter((item, i) => i !== index))
    }

    return (
        <div>
            <input type="text" id="task" name="task" placeholder='Enter your Task'/>
            <button onClick={() => {
                const input = document.getElementById('task');
                // console.log(input.value);
                setTodo(input.value);
                // console.log(todo);   
                addTask(input.value);
                input.value = "";
            }}>Add Task</button>

            <ul>
                {todoList.map((item, index) => {
                    return (
                    <>
                        <li key={index}>{item} </li>
                        <button onClick={() => {
                            deleteBtn(index)
                        }}>Delete</button>
                    </>
                    )
                })}
             </ul>
        </div>
    )
}

export default Todo
