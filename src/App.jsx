
// // // rcc là class
// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>App</div>
// //     )
// //   }
// // }
// // rfc là function
// import React, { Fragment } from 'react'
//   const fullName = "nguyen van a";
//   const age = 18;
//   const a =6;
//   const b =6;
//   let students = ["minh","hồng","hoa"]
//   let address = [
//     {
//       name: "hiếu",
//       address:"chí linh",
//       id:1
//     },
//     {
//       name: "minh",
//       address:"hải dương",
//       id:2
//     },
//     {
//       name: "hào",
//       address:"chương mỹ",
//       id:3
//     },
//   ]
// export default function App() {
//   return (
//     <>
//       <p>xin chào {fullName}, {age}</p>
//       <h2>tổng của a và b là {a+b}</h2>
//       <ul>
//         {students.map((item)=>(
//           <li>{item}</li>
//         ))}
//       </ul>
//       <table>
//         <thead>
//           <tr>
//             <th>STT</th>
//             <th>Họ và tên</th>
//             <th>Địa chỉ</th>
//             <th>Id</th>
//           </tr>
//         </thead>
//         <tbody>
//           {address.map((item,index)=>(
//             <tr key={item.id}>
//               <td>{index+1}</td>
//               <td>{item.name}</td>
//               <td>{item.address}</td>
//               <td>{item.id}</td>
//             </tr>
//           ))}  
//         </tbody>
//       </table>
//     </>
    
//   )
// }
import React from 'react';
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4_1 from './components/Bai4_1';
import Bai4 from './components/Bai4';
import Bai5 from './components/Bai5';
import Bai6 from './components/Bai6';



export default function App() {
  return (
    <div>
      {/* <Bai1 />
      <Bai2 />
      <Bai3 /> */}
      {/* <Bai4/>
      <Bai5/> */}
      <Bai6/>

    </div>
  )
}



