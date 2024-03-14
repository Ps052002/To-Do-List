import React from "react";

export default function Todoitem({value,index}) {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{value.Title}</td>
        <td>{value.Desc}</td>
        <td>{value.Remark}</td>
      </tr>
    </>
  );
}
