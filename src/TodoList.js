import { useState } from "react";
import "./style.css";

function generateId() {
    return Math.floor(Math.random() * 100);
}

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("low");
    const [status, setStatus] = useState("To Do");
    const [progress, setProgress] = useState(0);

    const handleSubmit = () => {
        setTodos((todos) =>
            todos.concat({
                text: input,
                id: generateId(),
                priority,
                status,
                progress,
                isEditing: false, // Flag to check if the task is in editing mode
            })
        );
        setInput("");
        setPriority("low");
        setStatus("To Do");
        setProgress(0);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    };

    const updateTodo = (id, updatedTask) => {
        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTask } : todo))
        );
    };

    const toggleEdit = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (
        <div className="container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="New Todo"
            />

            <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <input
                type="number"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                min="0"
                max="100"
                placeholder="Progress (%)"
            />

            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({ text, id, priority, status, progress, isEditing }) => (
                    <li key={id} className="todo">
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) =>
                                        updateTodo(id, { text: e.target.value })
                                    }
                                />
                                <button onClick={() => toggleEdit(id)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{text}</span>
                                <span>Priority: {priority}</span>
                                <span>Status: {status}</span>
                                <span>Progress: {progress}%</span>
                                <button onClick={() => toggleEdit(id)}>Edit</button>
                            </>
                        )}
                        <button className="close" onClick={() => removeTodo(id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;





// import { useState } from "react";
// import "./style.css";

// function generateId() {
//     return Math.floor(Math.random() * 100);
// }

// function TodoList() {
//     const [todos, setTodos] = useState([]);
//     const [input, setInput] = useState("");
//     const [priority, setPriority] = useState("low"); // Priority state
//     const [status, setStatus] = useState("To Do"); // Status state
//     const [progress, setProgress] = useState(0); // Progress state

//     const handleSubmit = () => {
//         setTodos((todos) =>
//             todos.concat({
//                 text: input,
//                 id: generateId(),
//                 priority,
//                 status,
//                 progress,
//             })
//         );
//         setInput("");
//         setPriority("low");
//         setStatus("To Do");
//         setProgress(0);
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === "Enter") {
//             handleSubmit();
//         }
//     };

//     const removeTodo = (id) => {
//         setTodos((todos) => todos.filter((t) => t.id !== id));
//     };

//     const updateTodo = (id, updatedTask) => {
//         setTodos((todos) =>
//             todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTask } : todo))
//         );
//     };

//     return (
//         <div className="container">
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyPress}
//                 placeholder="New Todo"
//             />

//             <select onChange={(e) => setPriority(e.target.value)} value={priority}>
//                 <option value="high">High</option>
//                 <option value="medium">Medium</option>
//                 <option value="low">Low</option>
//             </select>

//             <select onChange={(e) => setStatus(e.target.value)} value={status}>
//                 <option value="To Do">To Do</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//             </select>

//             <input
//                 type="number"
//                 value={progress}
//                 onChange={(e) => setProgress(e.target.value)}
//                 min="0"
//                 max="100"
//                 placeholder="Progress (%)"
//             />

//             <button onClick={handleSubmit}>Submit</button>

//             <ul className="todos-list">
//                 {todos.map(({ text, id, priority, status, progress }) => (
//                     <li key={id} className="todo">
//                         <span>{text}</span>
//                         <span>Priority: {priority}</span>
//                         <span>Status: {status}</span>
//                         <span>Progress: {progress}%</span>
//                         <button className="close" onClick={() => removeTodo(id)}>
//                             X
//                         </button>
//                         <button onClick={() => updateTodo(id, { status: "In Progress" })}>
//                             Mark In Progress
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default TodoList;





// import { useState } from "react"
// import "./style.css"

// function generateId() {
//     return Math.floor(Math.random() * 100);
// }

// function TodoList() {
//     const [todos, setTodos] = useState([]);
//     const [input, setInput] = useState("");

//     const handleSubmit = () => {
//         setTodos((todos) => 
//             todos.concat({
//                 text: input,
//                 id: generateId()
//             })
//         );
//         setInput("");
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === "Enter") {
//           handleSubmit();
//         }
//       };

//     const removeTodo = (id) => {
//         setTodos((todos) => todos.filter((t) => t.id !== id));
//     } 


//   return (
//     <>
//       <div className="container">
//         <input type="text" 
//         value={input} 
//         onChange={(e) => setInput(e.target.value)} 
//         onKeyDown={handleKeyPress}
//         placeholder="New Todo"
//         />

//         <button onClick={handleSubmit}>Submit</button>

//         <ul className="todos-list">
//             {
//                 todos.map(({text, id}) =>{
//                     return(
//                     <li key={id} className="todo">
//                         <span>{text}</span>
//                         <button className="close" onClick={() => removeTodo(id)}>X</button>
//                     </li>)
//                 })
//             }
//         </ul>

//       </div>
//     </>
//   )
// }

// export default TodoList