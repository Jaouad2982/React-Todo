import React from "react"

const AddOptions =(props)=>{
        const style = {
            borderRadius : "20%",
            width : "50%",
            marginTop:"10%",
        }

        const styleBtn ={
            borderRadius:"5%",
            width:"100%",
            color:"black",
            marginTop:"5%",
            display:"block",
            borderRadius:"10%"
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

export default AddOptions