import React from "react"


const Action =(props)=>{
     const handlePick = ()=>{
        alert("hello");
    }
    return (
        <div>
        <button 
        onClick={handlePick}
        disabled={!props.hasOption}
        >What Should I do</button>
        </div>
    )
}

export default Action
