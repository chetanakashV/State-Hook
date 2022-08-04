import React, { useEffect, useState } from 'react'

const HookCounter = () => {
     const initialCount = 0
     const [count,setCount] = useState(initialCount)

     useEffect( () => {
        document.title = `you clicked ${count} times`
     })

    return(
        <div>
        <p>count: {count}</p><br/>
        <button onClick = {() => {setCount(initialCount)}}>Reset</button><br/>
        <button onClick = {() => {setCount(prevCount => prevCount +1)}}>increment</button><br/>
        <button onClick = {() => {setCount(prevCount => prevCount +5)}}>increment by 5</button><br/>
        <button onClick = {() => {setCount(prevCount => prevCount -1)}}>decrement</button><br/>
        <button onClick = {() => {setCount(prevCount => prevCount -100)}}>decrement by 100</button>
        </div>
    )
}

export default HookCounter