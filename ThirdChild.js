import React,{useContext} from 'react'
import {context} from './Parent'
function ThirdChild(props){
    const{color,backColor}=useContext(context);
    console.log(color);
    console.log(backColor);
    return(
        <div>
            <h1 style={{color:color,backgroundColor:backColor}}>
                PropDrilling
            </h1>
        </div>
    )
}
export default ThirdChild;