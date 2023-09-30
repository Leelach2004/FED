import React from 'react'
import SecondChild from './SecondChild';
function Child(props){
    const {color,backColor}=props;
    console.log("FisrtChild");
    console.log('color',color);
    console.log('BackGroundColor',backColor);
    return(
        <div>
            <SecondChild color={color} backColor={backColor}/>
        </div>
    )
}
export default Child;