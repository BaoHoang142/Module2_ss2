import React, { Component } from 'react'

export default class Bai3 extends Component {
    // constructor (){
    //     super()
    //     this.state = {
    //         data:[],
    //         time: new Date(),
    //     }
    // }
    
    // componentDidMount(){
    //     setInterval(() => {
    //         this.runTime
    //     }, 1000);
    //     this.setState({
    //         time: new Date()
    //     })
    // }
    // runTime(){
    //     this.setState({
    //         time: new Date()
    //     })
    // }
    render() {
    let time = new Date();
    return (
      <>
        <h3>Xin chào các bạn!</h3>
        <p>Bây giờ là: {time.toLocaleTimeString()}</p>
      </>
    )
  }
}
