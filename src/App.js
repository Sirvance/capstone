import React, {useEffect, useState } from 'react'
import './App.css';

const App = () => {
  const [item, setItem ] = useState([])

  useEffect(() => {
    const getAllData = async () => {
      try{
        const response = await fetch('https://fakestoreapi.com/items')
        const { results } = await response.json()
        setItems(results)
      } catch (err) {
        console.error(err)
      }
    }
    getAllData()
    },[])



return (
    
  
);
}

export default App;
