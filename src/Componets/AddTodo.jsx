import { useState } from "react";

export const AddTodo = () =>{
    const [taskName,setTaskName] = useState('');
    const [status,setStatus] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <form>
                <label for="taskName">TaskName</label>
                <input type = "text" onChange ={((e)=>setTaskName(e.value))}></input>
                <label for="status">Status</label>
                <input type="checkbox"></input>
                <button type='submit' onClick={handleSubmit} onChange ={((e)=>setStatus(e.value))}>Submit</button>
            </form>
        </div>
    )
}