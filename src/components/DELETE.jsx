import React from 'react'
import axios from 'axios';

const DELETE = ({currentEnvironment,baseURL,BASE_DEV_URL,BASE_PRODUCTION_URL}) => {
    async function getAllPosts(){
        try {
            let resp = await axios({
                method: "delete",
                url: `${baseURL}/posts/1`
            });
            console.log(resp);    
        } catch (error) {
            console.log(error);
        }
        
    }
  return <button onClick={getAllPosts}>DELETE</button>
}

export default DELETE