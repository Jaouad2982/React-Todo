import React from "react"

const AddOptions =()=>{
        const handleAddOption = (e)=>{
            e.preventDefault();
            const val = e.target.elements.option.value.trim();
            if(val){
                alert(val)
            }

        }
        return(
            <div>
                    <form onSubmit={handleAddOption}>
                        <input type="text" name="option" placeholder="Enter option"/>
                        <button>Add option</button>
                    </form>
            </div>
        )
}

export default AddOptions