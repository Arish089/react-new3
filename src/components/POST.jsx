import axios from 'axios';
import React from 'react'

const POST = ({currentEnvironment,baseURL,BASE_DEV_URL,BASE_PRODUCTION_URL}) => {
    
const getAllPosts = async ()=>{
    try {
        let resp = await axios({
            method: "get",
            baseURL: baseURL,
            url: `/posts`,
        });

        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

async function makePostRequest(){
    try {
        let resp = await axios({
            method: "post",
            baseURL: baseURL,
            url:  `/posts`,
            data: {
                userId: 1,
                title: "foo",
                body: "bar",
                id:"1"
            },
        });
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div>
        <h1>{currentEnvironment}</h1>
        <button onClick={getAllPosts}>GET POSTS</button>
        <button onClick={makePostRequest}>POST REQUEST</button>
    </div>
  )
}

export default POST