import axios from "axios";
import React,{useState,useEffect} from "react";

const FetchOneData = () => {
    const [id,setId] = useState(1)
    const [bid,setBid] = useState(1)
    const [post,setpost] = useState({})

    const setvalue = () => {
        setBid(id)
    }
    useEffect (()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${bid}`).then(response =>{ console.log(response)
     setpost(response.data)})
    },[bid])
    return(
        <div>
        <input type = "number"  value = {id} onChange={e => {setId(e.target.value)}}/>
        <button onClick = {setvalue}> fetch data</button>
        <p>{post.title}</p>
        </div>
    )
}

export default FetchOneData