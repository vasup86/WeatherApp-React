import React from "react"

export default function Cards(props){
    const number = props.type.number
    const suit = props.type.suit
    return(
        <div >
            <div>{number}</div>
            <div>{suit}</div>
        </div>
    )
}