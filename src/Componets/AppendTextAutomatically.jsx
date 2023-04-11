import { useState } from "react";

export const AppendTextAutomatically = () =>{
    const intData = [
        'One', 'two','three','four'
    ];
    const [data,setData] = useState(intData)
    
    const addMore = () =>{
        console.log(data,"data");
       return setData(()=> data.push("Five"));
      
    }
    return (
    
        <div>
            {data.map((text)=> <li> {text}</li>)}
            <button type="submit" onClick={addMore}>Add more</button>
        </div>
            

)
}