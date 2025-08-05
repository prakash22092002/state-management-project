import { useState } from 'react'
import NavBar from "./Component/NavBar"
import PortalBodyRoute from './Routes/PortalBodyRoute'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <PortalBodyRoute />
    </div>
  )
}

export default App
