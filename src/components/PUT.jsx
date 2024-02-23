import axios from 'axios'
import React from 'react'

const PUT = () => {
async function getAllPosts(){
    try {
        let resp = await axios({
            method: "put",
            url: `https://jsonplaceholder.typicode.com/posts/1`,
            data:{
                title: "New title",
                body: "Random content",
                userId: 2.
            }
        });
        console.log(resp);    
    } catch (error) {
        console.log(error);
    }
    
}

  return (
    <div>
        <button onClick={getAllPosts}>PUT</button>
    </div>
  )
}

export default PUT