import React from "react"


const Action =(props)=>{

        const styleBtn ={
            fontFamily: "'Permanent Marker', cursive",
            fontSize :"1rem",
            margin:"0 auto",
            display:"block",
            width:"40%",
            color:"black",
            marginTop:"5%",
            display:"block",
            borderRadius:"10%",
    }
    return (
        <div>
        <button  style={styleBtn}
        onClick={props.handlePickOption}
        disabled={!props.hasOption}
        >What Should I do</button>
        </div>
    )
}

export default Action
