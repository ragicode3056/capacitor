export const Todo = ({data}) =>{
    console.log(data  ,"data");
    const test = data.map((data)=> data.status );
    console.log(test,"test")

    return (
        <div>
 {data.map((data)=> 
            <div>
                 <li key={data.id}> Todo List Name{ data.taskName} and status is {data.status}</li>
            </div>        
 )}
      
        </div>
      
        
    )
}