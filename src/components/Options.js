import React from "react"
import Option from "./Option"
import Radium from "radium"
const Options = (props)=>{

    const style = {
        fontFamily: "'Permanent Marker', cursive",
        fontSize:"1.2rem",
        borderRadius : "20%",
        width : "100%",
        marginTop:"10%",
        ":hover":{
            backgroundColor : "#ce9de8",
            boxShadow : "5px 3px  #1e012d"
        }
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

export default Radium(Options)