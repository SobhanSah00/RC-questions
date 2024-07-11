import {useState} from "react"

function ToastContainer() {
    // const [show,setShow] = useState()
    const [toasts,setToasts] = useState([])


    // const handelcancel = () => {
    //     setShow(false)
    // }   

    // const handelAdd = () => {
    //    setShow(true)
    //    setTimeout(handelcancel,5000); 
    // }
    

    const handelcancel = (id) => {
        setToasts((prevToast) => {
            return prevToast.filter((toast) => toast.id !== id)
        })
    }   

    const handelAdd = (message,type) => {
        const id = Date.now();
        const newToasts = [...toasts,{id,message,type}]
        setToasts(newToasts)

        setTimeout(() => {
            handelcancel(id)
        }, 5000);
    }


    
  return (
    <>
        <div className="container">
            <div className="toast-container">
                {
                    toasts.map(({id,message,type}) => {
                        return (
                            <div key={id} className={`toast ${type}`}> 
                                {message} <span onClick={() => handelcancel(id)} >X</span>
                            </div>
                        )
                    })    
                }
            </div>
            <div className="btn-container">
                <button onClick={() => handelAdd('Success','success')} className="btn-margin success">Success Toast</button>
                <button onClick={() => handelAdd('Info','info')} className="btn-margin info">Info Toast</button>
                <button onClick={() => handelAdd('Warning','warning')} className="btn-margin warning">Warning Toast</button>
                <button onClick={() => handelAdd('Error','error')} className="btn-margin error">Error Toast</button>
            </div>
        </div>
    </>
  )
}

export default ToastContainer