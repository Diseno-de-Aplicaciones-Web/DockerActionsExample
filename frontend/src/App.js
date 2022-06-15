import { useEffect, useState } from "react"
import './App.css';

function App() {

  const HOST = window.location.hostname === "localhost" ? "http://localhost:8080/" : "/"

  const [ food, setFood ] = useState("...")

  async function fetchFood () {
    const response = await fetch(HOST+"random_food/")
    const data = await response.text()
    setFood(data) 
  }

  useEffect(
    ()=>{
      fetchFood()
    },
    []
  )

  return (
    <div className="wrapper">
      <h1>Hoy toca comer {food}.</h1>
    </div>
  )
}

export default App;