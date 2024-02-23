import axios from "axios"
import { useState } from 'react'
import './App.css'
import Get from "./components/GET"
import POST from "./components/POST"
import PUT from "./components/PUT"
import PATCH from "./components/PATCH"
import DELETE from "./components/DELETE"

function App() {
  const BASE_PRODUCTION_URL = import.meta.env.VITE_BASE_PRODUCTION_URL;
  const BASE_DEV_URL = import.meta.env.VITE_BASE_DEV_URL;
  const currentEnvironment = import.meta.env.MODE;
 
  const baseURL = currentEnvironment === "production" ?
  BASE_PRODUCTION_URL : BASE_DEV_URL;
 
 return (
    <>
    
    {
     //<Get />
<>
    <POST currentEnvironment={currentEnvironment}
    BASE_DEV_URL={BASE_DEV_URL} BASE_PRODUCTION_URL={BASE_PRODUCTION_URL}
    baseURL={baseURL}/>
    
      <PUT currentEnvironment={currentEnvironment}
      BASE_DEV_URL={BASE_DEV_URL} BASE_PRODUCTION_URL={BASE_PRODUCTION_URL}
      baseURL={baseURL} />

      <PATCH currentEnvironment={currentEnvironment}
      BASE_DEV_URL={BASE_DEV_URL} BASE_PRODUCTION_URL={BASE_PRODUCTION_URL}
      baseURL={baseURL} />

      <DELETE currentEnvironment={currentEnvironment}
      BASE_DEV_URL={BASE_DEV_URL} BASE_PRODUCTION_URL={BASE_PRODUCTION_URL}
      baseURL={baseURL} />
    
</>}
    </>
  )
}

export default App
