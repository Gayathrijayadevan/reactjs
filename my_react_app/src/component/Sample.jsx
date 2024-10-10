// the first letter of the jsx file should alaways be capital also the first letter of the class created in the jsx file otherwise it will cause error
import { Component } from "react";

class Sample_class extends Component{

    render(){
        // return is not used as a keyword but rather as a function here 
        return(
            <h2>class component</h2>
        )
    }
}

export default Sample_class