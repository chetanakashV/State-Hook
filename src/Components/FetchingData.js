import React,{useState,useEffect} from "react";
import axios from 'axios'

const FetchingData = () => {

    const [posts,setPosts] = useState([])
    const [id, setId] = useState(2)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {console.log(response)
            setPosts(response.data)}
        ).catch(error => {console.log(error)})
    },[id])
     
 

  return (
    <div>
        <input type = "number" value = {id} onChange = {(e) => {
        setId(e.target.value)
    }}/>
       
        {/* <ul>
            {posts.map(post => (<li key = {post.id}> {post.title}</li>))}
        </ul> */}
        <p>{posts.title}</p>
    </div>
)
}

export default FetchingData