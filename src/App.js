import React, { useState, useRef, forwardRef, useEffect } from 'react';
import ReactDOM from 'react-dom';


const InputField = (props) => {

  
  const inputRef = useRef()

  const [ inputText, setInputText ] = useState("")

  const [tasks, setTasks] = useState([])

  return(
    <div>
    <div>
      <input onChange={()=> {
                          setInputText(inputRef.current.value)
                      }} ref={inputRef} ></input>
      <button onClick = {() =>{
                          setTasks((tasks) => [...tasks, <Task inputText={inputText} setTasks={setTasks}  tasks={tasks}/>])
                          console.log(tasks)
                        }}>
                        Add</button>
      <button>Edit</button>
    </div>
    <div>
      {tasks.map((task, i) => task)}
    </div>
    </div>
  )
}

const Task = ({inputText, setTasks, tasks}) => {
  let taskRef = useRef()

  let editRef = useRef()
  
  let divRef = useRef()

  let hideRef = useRef()

  const hider = () => {
    divRef.current.innerHTML = editRef.current.value
    hideRef.current.style.visibility="hidden"

  }

  return(
    <div ref={taskRef}>
    <div ref={divRef}>{inputText}</div>
    <button className="delete" onClick={() => {
      taskRef.current.innerHTML = null
      console.log(taskRef)}}>Delete</button>
    <button onClick={() => {
      hideRef.current.style.visibility="visible"
    }} >Edit</button>
    <div ref={hideRef}  style={{visibility:"hidden"}}>
    <input ref={editRef}></input>
    <button 
      onClick= {() => {
        hider()
      }}>OK</button>
    </div>
    </div>
  )
}


const App = (props) => {

  return (
    <div>
      <InputField />
   </div>
  )
}

export default App;
