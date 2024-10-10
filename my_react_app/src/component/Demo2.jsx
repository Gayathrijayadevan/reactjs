import { Component } from "react";
class Demo2 extends Component{
 constructor(){
    super()
    this.state={color:'red',width:'200px'}
 }
 render(){
    return(
        <h2>Demo2{this.state.color}{this.state.width}</h2>
    )
 }
}
export default Demo2