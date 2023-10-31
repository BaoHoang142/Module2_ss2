import React, { Component } from 'react'
export default class Bai1 extends Component {
    
  render() {
let arr = ["HTML","JVSCR","PYTHON","C++"]

    return (
        <>
        <h1>DANH SÁCH KHÓA HỌC</h1>
        <ul>
        {arr.map((item)=>(
          <li>{item}</li>
        ))}
        </ul>
      </>
    )
  }
}
