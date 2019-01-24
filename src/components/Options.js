import React from "react"
import Option from "./Option"
const Options = (props)=>{
    return(
        <div>
                <h4>Options goes here</h4>
                {
                    props.options.map(option=><Option key={option} optionText={option}/>)
                }
                
        </div>


    )
}

export default Options