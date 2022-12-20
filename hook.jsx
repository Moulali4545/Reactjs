import React,{useState} from 'react';


export default function Hook() {
    const [count,setCount]=useState(0);
    // console.log(useState(10));


    const increment=()=>
    {
        setCount(count+1);
    };
    
    return (
    <div>
        <button>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

    </div>
  )
}
