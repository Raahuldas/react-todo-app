import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

function Btn({ btnname, onAddBtn, onDelBtn, ip, setIp, task }) {
  let clck = () => {
    btnname == "add" ? onAddBtn(ip, setIp) : onDelBtn(task);
  };
  return (
    <button
      className={`w-100 h-100 rounded btn ${
        btnname === "delete" ? "btn-delete" : "btn-add"
      }`}
      onClick={clck}
    >
      {btnname == "add" ? <IoMdAdd /> : <MdDeleteForever />}
    </button>
  );
}

export default Btn;
