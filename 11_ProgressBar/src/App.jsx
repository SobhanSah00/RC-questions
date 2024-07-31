import ProgressBar from './Components/ProgressBar'
import './App.css'
import { useState } from 'react'

function App() {
  const [show,setShow] = useState(false)
  return (
    <>
      
      {
        show ? <ProgressBar /> : ''
      }
      <button onClick={ () =>setShow(!show) }>Toggle</button>
    </>
  )
}

export default App
