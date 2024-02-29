import React from "react";
import Btn from "./btn";

function Tasklist({initialTask, onAddBtn, onDelBtn}) {
  return (
    <div className="list-container">
      {initialTask.map((task) => (
        <div className="row my-2 rounded list-items" key={task}>
          <div className="col-8 col-sm-9 col-md-10 col-lg-10 col-xl-11 d-flex align-items-center ps-4">{task}</div>
          <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1">
            <Btn btnname="delete" task={task} onAddBtn={onAddBtn} onDelBtn={onDelBtn} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasklist;
