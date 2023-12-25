// import React,{useState} from 'react'

// function Todo() {
//     const [tasks, setTasks] = useState([]);
//     const [input, setinput] = useState("");

//     const handleChange =(e)=>{
//         setinput(e.target.value);
//     }
// const add=()=>{
//     if(input!==""){
//         setTasks([...tasks,input]);
//         setinput("");
//     }
// }

// const handleDelete=(index)=>{
// const updatedTasks = tasks.filter((_,i)=>i!==index);
// setTasks(updatedTasks);
// }
//   return (
//     <div>
//         <h1>Todo App</h1>
//         <input type="text" value={input} onChange={handleChange} />
//         <button onClick={add}>Add to task</button>
//         <div>
//         {tasks.map((task,index)=>(
//             <>
//             <h3>{task}</h3>
//             <button  onClick={()=>handleDelete(index)}>Delete</button>
//             </>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Todo;

import React,{useState} from "react";

function Todo() {
  const [data, setdata] = useState("");
  const [tasks, settasks] = useState([]);

  const handleChange = (e) => {
    setdata(e.target.value);
  };

  const add = () => {
    if(data){
    settasks([...tasks, data]);
    setdata("");
    }
  };

  const handleDelete = (index) => {
    const deletedOne = tasks.filter((el, i) => i !== index);
    settasks(deletedOne);
  };
  return (
    <div>
      <h1>To-Do App</h1>
      <input type="text" value={data} onChange={handleChange} />
      <button onClick={add}>Add</button>
      {tasks.map((ele, index) => (
        <div key={index}>
          <h3 >{ele}</h3>
          <button onClick={()=>{handleDelete(index)}}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
