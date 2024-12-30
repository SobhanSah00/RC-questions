import { useRef } from "react"
import "../App.css"
import UseClickOutsideModal from "../hooks/UseClickOutsideModal"
function Modal({isOpen,closeModal}) {
    if(!isOpen) {
        return null
    }
    const modalref = useRef(null);
    UseClickOutsideModal(modalref,closeModal)
  return (
    <div ref={modalref} className="Modal-container">
        <div className="Modal-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum officia repellendus doloribus beatae facilis quam esse unde commodi totam ipsum, at perferendis facere reprehenderit autem harum recusandae voluptate consequuntur omnis!
        </div>
        <button onClick={closeModal}>Close</button>
    </div>
  )
}

export default Modal