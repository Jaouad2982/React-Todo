import React from "react"


const Header =(props)=>{
    return (
        <div>
                    <h3>{props.title}</h3>
                    <h5>{props.subtitle}</h5>
        </div>
    )
}

export default Header