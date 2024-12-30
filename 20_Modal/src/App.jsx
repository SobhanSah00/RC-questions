import { useState } from 'react'
import Modal from './components/Modal'
// import './App.css'

function App() {
  const [showModal,setShowModal] = useState(true)
  return (
    <>
      <Modal isOpen={showModal} closeModal={() => setShowModal(false)}/>
    </>
  )
}

export default App

