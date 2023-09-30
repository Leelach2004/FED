import React from 'react'
import Child from './Child'
export const context=React.createContext(null);
function Parent(){
    let color="RED";
    let backColor="GREEN";
    return(
        <div>
            <context.Provider value={{color,backColor}}>
                <Child/>
            </context.Provider>
        </div>
    )
}
export default Parent;