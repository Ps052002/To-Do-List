import {  useState } from "react";
import Todolist from "./Screens/Todolist";
import AddTodo from "./Screens/AddTodo";

export default function App() {
  const [todoitem,addTodo] = useState([]);
  const childCall = (e) => {
    console.log(e.Title)
    addTodo([...todoitem ,e])
  }
  
  // const todoitem = [
    // {
    //   Sno: "1",
    //   Title: "shopping",
    //   Desc: "Go to Trilium mall",
    //   Remark: "budget-20k",
    // },
  //   {
  //     Sno: "2",
  //     Title: "Lunch",
  //     Desc: "Go to Novelty",
  //     Remark: "budget-2k",
  //   },
  //   {
  //     Sno: "3",
  //     Title: "Watching Match",
  //     Desc: "Go to MCG",
  //     Remark: "budget-200k",
  //   },
  // ];

  return (
    <>
      <AddTodo f = {childCall} />
      <Todolist todo={todoitem} />
    </>
  );
}
