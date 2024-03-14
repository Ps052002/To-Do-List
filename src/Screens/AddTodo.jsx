import React, { useState } from "react";
import style from "./CSS Module/Todocss.module.css";
export default function AddTodo(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [remark, setremark] = useState("");

  const tododata = {
    Title: title,
    Desc: desc,
    Remark: remark,
  };
  const fData = (e) => {
    if (title === "" || desc === "" || remark === "") {
      alert("Please fill the data");
    } else {
      props.f(tododata);
      setdesc("");
      setdesc("");
      settitle("");
    }
  };
  return (
    <div className={`${style.m} mb-4`}>
      <div className="card p-3 mt-5">
        <h3>Add Todo</h3>
        <div className="row">
          <div className="col">
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Description"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Remark"
              value={remark}
              onChange={(e) => {
                setremark(e.target.value);
              }}
            />
          </div>
          <center>
            <div>
              <button
                type="button"
                class="btn btn-outline-dark mt-4"
                onClick={fData}
              >
                Add Task
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
