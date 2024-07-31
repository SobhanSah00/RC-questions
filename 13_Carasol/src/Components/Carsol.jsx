import data from "../data.json"
import {useEffect, useRef, useState} from "react"
const DATA = data.length;
function Carsol() {
  const [index, setIndex] = useState(0);
  const ref = useRef();

  const handelLeftClick = () => {
    if(index == 0) {
      setIndex(DATA - 1);
    }
    else {
      setIndex(index - 1);
    }
  }

  const handelRightClick = () => {
    if(index == DATA-1) {
      setIndex(0);
    }
    else {
      setIndex((prevIndex) => prevIndex + 1)
    }
    
  }

  useEffect(() => {
    ref.current = setInterval(handelRightClick,3000)
    return () => clearInterval(ref.current)
  })

  return (
    <div 
      onMouseLeave={() => ref.current = setInterval(handelRightClick,1000)}
      onMouseEnter={() => clearInterval(ref.current)} className="container">
        <div onClick={handelLeftClick} className="left">{"<"}</div>
        <img src={data[index].download_url} alt="" />
        <div onClick={handelRightClick} className="right">{">"}</div>
    </div>
  )
}

export default Carsol