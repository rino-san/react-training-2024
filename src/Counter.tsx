import React  from "react";

export function Counter() {
    const [count, setCount] = React.useState(0);

    const inc = () =>{
        setTimeout(()=>{setCount((prevCount) => prevCount+1);
        },1);
    };
    const dec = () =>{
        setCount((prevCount) => prevCount-1);
    }

    const reset = () =>{
        setCount(0);
    };
    return (
        <div>
            <span>Count: {count}</span>
            <button onClick = {inc}>+</button> 
            <button onClick = {dec}>-</button> 
            <button onClick = {reset}>RESET</button> 
        </div>
    )
};


