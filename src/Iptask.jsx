import React, { useState } from "react";
import Btn from "./btn";

function Iptask({onAddBtn}) {

  let [ip,setIp] = useState("");

  let iptxt =(event)=> {
  let ipval=event.target.value;
  setIp(ipval);
}

  return (
    <div className="row mb-3">
      <div className="col-8 col-sm-9 col-md-10 col-lg-10 col-xl-11">
        <input
          type="text"
          className="w-100 h-100 rounded p-2 ipbox"
          placeholder="enter your task..."
          onChange={iptxt} 
          value={ip}
          autoFocus
        />
      </div>
      <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1">
        <Btn btnname="add" iptxt={iptxt} onAddBtn={onAddBtn} ip={ip} setIp={setIp}/>
      </div>
    </div>
  );
}

export default Iptask;
