"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, { title, desc}]);
    // console.log(title)
    // console.log(desc)
    console.log(mainTask)
    setTitle("")
    setDesc("")
  }
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
    return <div className="td">
      <li key={i}>
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
        <button onClick={()=>{
          deleteHandler(i)
        }} >Delete</button>
      </li>
    </div>
  })
  }
  return (
    <div>
      <h1>My Todo List</h1>
      <div className='task1'>
        <form onSubmit={submitHandler} className='f1'>
          <input type='text' placeholder='Enter title here' value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <input type='text' placeholder='Enter task description' value={desc} onChange={(e)=>{
            setDesc(e.target.value)
          }}/>
          <button className='b1'>Add Task</button>
        </form>
      </div>
      <hr/>
      <div className='renderT'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  )
}

export default page
