import { Component } from "react";

 export default class Demo_class extends Component{

    constructor (){
        super()
    }
    render(){ 
        return(
            <h2>demo class component {this.props.color}{this.props.width} </h2>
        )
    }
}


