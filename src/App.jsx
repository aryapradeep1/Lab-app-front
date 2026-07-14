import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddLogin from './components/AddLogin'
import ViewLogin from './components/ViewLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddLogin/>
     <ViewLogin/>
    </>
  )
}

export default App
