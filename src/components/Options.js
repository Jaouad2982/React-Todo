import React from "react"
import Option from "./Option"
const Options = (props)=>{

    const style = {
        borderRadius : "20%",
        width : "100%",
        marginTop:"10%"
    }


    return(
        <div>
                <button style={style} onClick={props.handleDeleteOptions}>remove All </button>
             
                {
                    props.options.map(option=><Option
                        handleDeleteOption= {props.handleDeleteOption}
                         key={option} 
                         optionText={option}
                         />)
                }
                
        </div>


    )
}

export default Options