import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const getData = async () => {
    const res = await axios.get('http://localhost:3001/')
    console.log(res.data.fruit)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      
    </>
  )
}

export default App
