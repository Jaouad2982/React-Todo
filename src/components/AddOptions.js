import React from "react"

const AddOptions =(props)=>{
        return(
            <div>
                    <form onSubmit={props.handleAddOptions}>
                        <input type="text" name="option" placeholder="Enter option"/>
                        <button>Add option</button>
                    </form>
            </div>
        )
}

export default AddOptions