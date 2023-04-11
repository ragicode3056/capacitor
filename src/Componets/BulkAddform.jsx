import { useState } from "react";

export const BulkAddForm = () =>{
    const [inputs,setInputs] = useState({});
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
    }
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return (
        <div>
            <form>
                <label for="taskName">TaskName</label>
                <input type = "text" name="taskName" value = {inputs.taskName || ''} onChange ={handleChange}></input>
                <label for="status">Status</label>
                <input type="text" name="status" value = {inputs.status || ''} onChange ={handleChange}></input>
                <button type='submit' onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}