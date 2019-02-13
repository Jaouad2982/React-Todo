import React from "react"


const Header =(props)=>{
    return (
        <div>
                    <h3>{props.title}</h3>
        </div>
    )
}


Header.defaultProps = {
    title : "Todo List"
}

export default Header