import React from "react"


const Action =()=>{
     const handlePick = ()=>{
        alert("hello");
    }
    return (
        <div>
        <button onClick={handlePick}>What Should I do</button>
        </div>
    )
}

export default Action
