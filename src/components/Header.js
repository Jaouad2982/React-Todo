import React from "react"


const Header =(props)=>{
    const style = {
        color : "white",
        textAlign:"center",
        fontSize:"1.6rem"
    }
    return (
        <div style={style}>
                    <h3>{props.title}</h3>
        </div>
    )
}


Header.defaultProps = {
    title : "Todo List"
}

export default Header