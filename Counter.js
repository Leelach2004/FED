import React,{Component} from 'react'
 class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    incrementalHandler=()=>{
        this.setState({Count:this.state.count+1});
    };
    indecrementalHandler=()=>{
        this.setState({Count:this.state.count-1});
    };
    render(){
        return(
            <div>
                <button type="button" onclick={this.incrementalHandler}>+</button>
                &nbps;&nbps;
                {this.state.count}
                &nbsp;&nbsp;
                <button type="button" onclick={this.indecrementalHandler}>-</button>
            </div>
        );
    
    }
 }
 export default Counter;