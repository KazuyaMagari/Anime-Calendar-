import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const getData = async () => {
    const res = await axios.get('http://localhost:3001/')
    setData(res.data);
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}> ${item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
