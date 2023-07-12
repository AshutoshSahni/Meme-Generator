import { useState } from 'react'
import Header from '../components/Header'
import Meme from '../components/Meme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Meme />
    </>
  )
}

export default App
