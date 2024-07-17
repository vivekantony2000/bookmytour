import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Homepage from './pages/Home/Homepage'
import Explore from './pages/Explore/Explore'
import Router from './components/Router/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
      {/* <Homepage /> */}
      {/* <Explore /> */}
      <Router />
    </>
  )
}

export default App
