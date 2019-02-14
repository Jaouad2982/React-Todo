import React from "react"
import Radium from "radium"
const AddOptions =(props)=>{
        const style = {
            borderRadius : "20%",
            width : "50%",
            marginTop:"10%",
        }

        const styleBtn ={
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
                        <button style={styleBtn} >Add option</button>
                    </form>
            </div>
        )
}

export default Radium(AddOptions)