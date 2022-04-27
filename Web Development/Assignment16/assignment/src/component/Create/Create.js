import { useState } from 'react'
import ToDoList from '../ToDoList/ToDoList';


export default function Create() {
  const [name, setName] = useState("")
  const [item, setItem] = useState([])

  const itemEvent = (event) => {
    setName(event.target.value)
  };



  const listOfItemt = () => {
    setItem((oldItem) => {
      return [...oldItem, name]
    });
    setName = ('');
  };

  const  deleteItem = (id) => {
    console.log("delete")

     setItem((oldItem) =>{
       return oldItem.filter((arrElement,index)=>{
         return index !== id;
       })

     });
    }; 

  return (
    <div>
      <h1>To Do List</h1>
      <br />
      <input type="text" placeholder='to do' size={50} 
        value={name}
        onChange={itemEvent} />
      <button onClick={listOfItemt}>+</button>


      <ol>
        {item.map((usman, index) => {
         return  <ToDoList key={index}
         id={index}
          text={usman} 
          onSelect={deleteItem}
           />;
         
        })}
      </ol>
    </div>

  );
}
