import axios from 'axios'
import React from 'react'

const PUT = ({currentEnvironment,baseURL,BASE_DEV_URL,BASE_PRODUCTION_URL}) => {
async function getAllPosts(){
    try {
        let resp = await axios({
            method: "put",
            url: `${baseURL}/posts/1`,
            data:{
                title: "New title",
                body: "Random content",
                userId: 2,
                id: "2",
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