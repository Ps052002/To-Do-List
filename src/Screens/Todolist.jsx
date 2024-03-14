import React from "react";
import style from "./CSS Module/Todocss.module.css";
import Todoitem from "./Todoitem";
export default function Todolist({ todo }) {
  return (
    <>
      <div className={`${style.m}`}>
        <h3 className={style.f}>To Do List</h3>
        {todo.length == 0 ? (
          <div class="alert alert-danger" role="alert">
            No Todo available
          </div>
        ) : (
          <table class="table table:hover">
            <thead>
              <tr className="{`${style.b}`} table-dark ">
                <th scope="col">SNO.</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((value, index) => {
                return <Todoitem value={value} index={index} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
