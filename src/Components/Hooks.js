import React, { useEffect, useState } from 'react'
import './Hooks.css';
const Hook = ()=>{
    const initialData = 10;
    console.log(initialData);
    const [myNum, setMyNum]= useState(0)
    useEffect(()=>{
        document.title= `Chats(${myNum})`
    })
    return(
        <div>
            <h1>{myNum}</h1>
            <button id='increase' onClick={()=>setMyNum(myNum +1)}>INCREASE</button>
            <button id='decrease' onClick={()=>(myNum>0 ? setMyNum(myNum -1): setMyNum(0))}>DECREASE</button>
        </div>
    )
}
export default Hook;