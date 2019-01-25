import React from "react"
import Option from "./Option"
const Options = (props)=>{

    const hanldeRemoveAll = ()=>{
        alert("Remove All clicked")
    }
    return(
        <div>
                <button onClick={hanldeRemoveAll}>remove </button>
                {
                    props.options.map(option=><Option key={option} optionText={option}/>)
                }
                
        </div>


    )
}

export default Options