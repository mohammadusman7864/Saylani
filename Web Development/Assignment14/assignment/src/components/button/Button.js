
import React from 'react'
import '../button/Button.css'
export default function Button(props) {
    return (
        <div>
            <button id='con2btn' style={{margin:props.margin}} >{props.title}</button>
           
        </div>


    )
}

