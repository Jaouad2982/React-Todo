import React from "react"
import Radium from "radium"
const AddOptions =(props)=>{
        const style = {
            borderRadius : "20%",
            width : "40%",
            marginTop:"10%",
        }

        const styleBtn ={
            fontFamily: "'Permanent Marker', cursive",
            fontSize :"1.3rem",
            width:"100%",
            color:"black",
            marginTop:"5%",
            display:"block",
            borderRadius:"10%",
            ":hover":{
                backgroundColor : "#ce9de8",
                boxShadow : "5px 3px  #e8deed"
            }
        }
        return(
            <div >
                    <form onSubmit={props.handleAddOptions}>
                        <input style={style} type="text" name="option" placeholder="Enter Todo"/>
                        <button style={styleBtn} >Add Todo</button>
                    </form>
            </div>
        )
}

export default Radium(AddOptions)