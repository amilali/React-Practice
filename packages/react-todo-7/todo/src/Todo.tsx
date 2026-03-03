// import { useState } from "react";
// import './App.css'
// type TodoItem = {
//   id: number;
//   todo: string;
// };

import { useState } from "react"

// const Todo = () => {
//   const [data, setData] = useState<TodoItem[]>([]);
//   const [input, setInput] = useState<string>("");
//   const [editId, setEditId] = useState<number | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (): void => {
//     if (!input.trim()) return;

//     if (editId !== null) {
//       setData(prev =>
//         prev.map(item =>
//           item.id === editId
//             ? { ...item, todo: input }
//             : item
//         )
//       );
//       setEditId(null);
//     } else {
//       const newTodo: TodoItem = {
//         id: Date.now(),
//         todo: input
//       };

//       setData(prev => [...prev, newTodo]);
//     }

//     setInput("");
//   };

//   const handleDelete = (id: number): void => {
//     setData(prev => prev.filter(item => item.id !== id));
//   };

//   const handleEdit = (item: TodoItem): void => {
//     setEditId(item.id);
//     setInput(item.todo);
//   };

//   return (
//     <div className="todo">
//       <center><h1>Todo</h1></center>

//       <div className="todolist">
//         <input
//           type="text"
//           value={input}
//           onChange={handleChange}
//           placeholder="Add something cool..."
//           className="todo-input"
//         />
//         <button
//           onClick={handleSubmit}
//           className="todo-button"
//         >
//           {editId !== null ? "Update" : "Add"}
//         </button>
//       </div>

//       {data.length === 0 && (
//         <p className="placeholder">
//           Hi, Add something cool!!
//         </p>
//       )}

//       {data.map(item => (
//         <div key={item.id} className="todo-item">
//           <span>{item.todo}</span>

//           <div className="todo-actions">
//             <button onClick={() => handleEdit(item)}>
//               Edit
//             </button>
//             <button onClick={() => handleDelete(item.id)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Todo;

type TodoData = {
  id: number,
  todo: string
}
const Todo = () => {

const [data, setData] = useState<TodoData[]>([]);
const [input, setInput] = useState<string>('');


const handleSubmit = ():void =>{
  if(!input.trim()) return;

  setData(prev => ([
    ...prev,
    {id:Date.now(),todo:input}
  ]));
  setInput('');
}

const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
  setInput(e.target.value);
}

const handleDelete = (todoIndex:number):void =>{
  setData(prev=>prev.filter((item)=>item.id!=todoIndex)
  )
}

  return (
    <div className="todo">
        <center><h1>Todo</h1></center>
        <div className="todoList">
          <input value={input} type="text" onChange={handleChange}/>
          <button onClick={handleSubmit}>Add</button>
        </div>
          {data.map((e)=><div className="todoItem" key={e.id}>
            <span>{e.todo}</span>
            <button onClick={()=>handleDelete(e.id)}>Delete</button>
          </div>)}
    </div>
  )
}

export default Todo