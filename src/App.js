import React, {useEffect, useState } from 'react'
import NavBar from './components/navBar';
import './App.css';

const App = () => {
  const [item, setItem ] = useState([])

  useEffect(() => {
    const getAllData = async () => {
      try{
        const response = await fetch('https://fakestoreapi.com/products')
        const { results } = await response.json()
        setItems(results)
      } catch (err) {
        console.error(err)
      }
    }
    getAllData()
    },[])



return (
  <div className="App">
    <NavBar/>
    home
    <h2></h2>
    <Cards/>
  </div>
    
  
);
}

export default App;
