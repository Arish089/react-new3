import React from 'react'
import axios from "axios"
import { useState } from 'react'

const Get = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
   function getAllPosts(){
      /**
        try {
          let resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
          console.log(resp);
        } catch (error) {
          console.log(error);
        }
      */
     axios.get('https://reqres.in/api/users',{
      params:{
        page: page
      }
     })
     .then((resp)=>{
      console.log(resp.data.data);
      setPosts(resp.data.data);
     })
     .catch((err)=>{
      console.log(err);
     })
    }
    
    function firstPage(){

     page > 1? setPage(page - 1) : null
      getAllPosts()
      
    }
  
    function lastPage(){

       page <= 1? setPage(page + 1) : null 
        getAllPosts()
    }
  return (
    <>
        <button onClick={getAllPosts}>Get</button>
     <div>
        {posts.map((item)=>{
          return(
            <>
              <img src={item.avatar} alt="" />
              <h2>Name: {item.first_name}{item.last_name}</h2>
              <h3>{item.email}</h3>
            </>
          )
        })
      }
      <button onClick={firstPage}>First</button>
      <button onClick={lastPage}>Last</button>
     </div>
    </>
  )
}

export default Get