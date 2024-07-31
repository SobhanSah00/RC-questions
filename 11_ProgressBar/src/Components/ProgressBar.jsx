import "./progress.css"
import {useEffect, useState} from "react"
function ProgressBar() {
    const [bar,setBar] = useState(0)
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("SetInterVal is Running");
            setBar((prevBarValue) => {
                if(prevBarValue >= 100) {
                    clearInterval(intervalID)
                    return prevBarValue
                }
                return prevBarValue + 5
            })
            // clearInterval(intervalId)
        },150)
        return () => clearInterval(intervalID)
    },[])
    
  return (
    <div className="container">
        <div style={{transform: `translateX(${bar - 100 }%)`}} className="progress">

        </div>
    </div>
  )
}

export default ProgressBar