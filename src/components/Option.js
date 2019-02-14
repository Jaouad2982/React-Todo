import React from "react"
import Radium from "radium"
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
        borderRadius:"19%",
        ":hover":{
            backgroundColor : "#ce9de8",
            boxShadow : "5px 3px  #e8deed",
            width:"21%"
        }
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



export default Radium(Option) 