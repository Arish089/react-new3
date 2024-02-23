import React from 'react'
import axios from 'axios';

export default function PATCH (){
    async function getAllPosts(){
        try {
            let resp = await axios({
                method: "patch",
                url: `https://jsonplaceholder.typicode.com/posts/1`,
                data:{
                    title: "Updated title",
                    body: "Random content",
                    userId: 2,
                }
            });
            console.log(resp);    
        } catch (error) {
            console.log(error);
        }
        
    }
    
      return (
        <div>
            <button onClick={getAllPosts}>PATCH</button>
        </div>
  )
}


