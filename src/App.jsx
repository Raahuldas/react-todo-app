import "./App.css";
import Iptask from "./Iptask";
import EmptyMessage from "./EmptyMessage";
import Tasklist from "./Tasklist";
import Container from "./Container";
import { useState } from "react";

function App() {
  let arr = ["gym", "learn skills", "projects"];
  const [initialTask,setInitialTask] = useState(arr);

  let handleAddBtn = (ip,setIp)=>{
    if (ip) {
      let newTasks = [...initialTask,ip];
        setInitialTask(newTasks);
        console.log(ip+ " is added");
        setIp("");
    }  
  }

  let handleDelBtn= (task)=>{
    console.log(task+ " is deleted");
    const newTaskdel = initialTask.filter(item=> item != task);
    setInitialTask(newTaskdel);
  }

  return (
    <Container>
      <div className="row text-center mb-5">
        <h1>ToDo List</h1>
      </div>
      <Iptask onAddBtn={handleAddBtn}/>
      {initialTask=="" && <EmptyMessage/>}
      {initialTask!="" && <Tasklist initialTask={initialTask} onAddBtn={handleAddBtn} onDelBtn={handleDelBtn}/>}
    </Container>
  );
}

export default App;
