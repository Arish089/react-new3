import React from 'react'
import axios from 'axios';

const DELETE = () => {
    async function getAllPosts(){
        try {
            let resp = await axios({
                method: "delete",
                url: `https://jsonplaceholder.typicode.com/posts/1`
            });
            console.log(resp);    
        } catch (error) {
            console.log(error);
        }
        
    }
  return <button onClick={getAllPosts}>DELETE</button>
}

export default DELETE