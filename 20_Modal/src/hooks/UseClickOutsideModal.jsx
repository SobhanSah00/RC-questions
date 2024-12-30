import { useEffect } from "react"

function UseClickOutsideModal(modalref,closeModal) {
    useEffect(() => {
        document.addEventListener("mousedown",handeler)
    },[])
  return (
    <div>UseClickOutsideModal</div>
  )
}

export default UseClickOutsideModal