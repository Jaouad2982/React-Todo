import React from "react"

const Option = (props)=>{
    const style = {
        display:"flex",
        justifyContent :"space-between",
        width:"100%",
        marginTop:"6%"
    }
    const styleBtn ={
        width:"20%",
        color:"#2d2244",
        borderRadius:"19%"
    }

    return (
        <div style={style}>
           {props.optionText}
           <button style={styleBtn}
                onClick = {(e)=>{
               props.handleDeleteOption(props.optionText)
           }}> remove </button>
        </div>
    )
}



export default Option 