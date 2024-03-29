import { useState } from "react"
import React from 'react'

export default function AddToDo(props) {
    const [title,setTitle]=useState('');
    const[desc,setDesc]= useState('');
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description not found");
        }else{
           props.addToDo(title,desc);
        }

    }
  return (
    <div className='container my-3'>
        <h3>Add a todo</h3>
    <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">ToDo title</label>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label htmlFor="desc" className="form-label">ToDo description</label>
      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
    </div>
   
    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
  </form>
  </div>
  )
}
