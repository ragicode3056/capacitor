import { useState } from "react";
import { Todo } from "./Componets/Todo";
import { AddTodo } from "./Componets/AddTodo";
import { BulkAddForm } from "./Componets/BulkAddform";
import { AppendTextAutomatically } from "./Componets/AppendTextAutomatically";
import { RouterComponent } from "./Componets/RouterComponent";
import { NavContent } from "./Componets/NavContent";

function App() {
  const data = [
    {
       taskName : 'Eating',
      status : 'false',
      name:'hae',
      id:123
    },
    {
       taskName : 'Excersice',
      status : 'false',
      name:'jae',
      id:456
    },
    {
       taskName : 'Walking',
      status : 'false',
      name:"ohae",
      id:891
    }
  ]
  const [isClicked,setIsClicked] = useState(false);
  const addItem = () =>{
  data.push({
      taskName: 'New Item',
      status : 'true'
    });
    setIsClicked(true)
  return data;
    console.log(data,"new data");
}
const manualAdd = () =>{
  setIsClicked(true);
}
  return (
    <div>
        <h1 className="test">TODO Elements</h1>
          <Todo data={data} />
          <button onClick ={addItem}> Add Item </button>
          <button onClick = {manualAdd}>Manual Add Item</button>
         {isClicked ? <AddTodo /> : ''} 
         <BulkAddForm />
         <AppendTextAutomatically />
         {/* <NavContent/> */}
    </div>
  
  );
}

export default App;
