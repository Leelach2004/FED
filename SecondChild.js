import React from 'react'
import ThirdChild from './ThirdChild';
function SecondChild(props){
    const{color,backColor}=props;
    console.log("SecondChild");
    console.log('color',color);
    console.log('BackGroundColor',backColor);
    return(
        <div>
            <ThirdChild color={color} backColor={backColor}/>
        </div>
    )
}
export default SecondChild;