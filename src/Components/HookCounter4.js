import React, { useState } from "react";

const HookCounterfour = () => {

    const [items,setItems] = useState([])

    const AddItem = () => {
        setItems([...items,{
            id:items.length ,
            value: Math.floor(Math.random() *10 ) +1}
        ])
    }

    return (
        <>
        <button onClick={AddItem}>Add Item</button>
        <ul>
            {items.map(items => (<li value = {items.id}>{items.value}</li>))}
        </ul>
        </>
    )
}

export default HookCounterfour