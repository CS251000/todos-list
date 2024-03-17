
import Headers from "./myComponents/header";
import ToDos from "./myComponents/ToDos";
import Footer from "./myComponents/Footer";
import AddToDo from "./myComponents/AddToDo"
import React,{useState} from 'react';
import './App.css';

function App() {
  let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo=[];
}else{
  initTodo=JSON.parse(localStorage.getItem("todos"));
}

const onDelete=(todo)=>{
  console.log('hatt',todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));
}

  const addToDo = (title,desc)=>{
    let sno = todos.length+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);

    localStorage.setItem("todos",JSON.stringify(todos));
    
  }
 

  const[todos,setTodos]=useState([initTodo]);
  return (
    <>
    <Headers title='My ToDos list'/>
    <AddToDo addToDo={ addToDo }/>
    <ToDos todos={todos} onDelete={onDelete}/>
    <Footer/>
   </>
  );
}

export default App;
