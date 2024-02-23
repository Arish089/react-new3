import React from 'react'
import axios from 'axios';

export default function PATCH ({currentEnvironment,baseURL,BASE_DEV_URL,BASE_PRODUCTION_URL}){
    async function getAllPosts(){
        try {
            let resp = await axios({
                method: "patch",
                url: `${baseURL}/posts/1`,
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


