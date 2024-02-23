import axios from 'axios';
import React from 'react'

const POST = () => {
    const BASE_PRODUCTION_URL = import.meta.env.VITE_BASE_PRODUCTION_URL;
 const BASE_DEV_URL = import.meta.env.VITE_BASE_DEV_URL;
 const currentEnvironment = import.meta.env.MODE;

 const baseURL = currentEnvironment === "production" ?
 BASE_PRODUCTION_URL : BASE_DEV_URL;
const getAllPosts = async ()=>{
    try {
        let resp = await axios({
            method: "get",
            url: `${baseURL}/posts`,
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
            url:  `${baseURL}/posts`,
            data: {
                userId: 1,
                title: "foo",
                body: "bar",
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