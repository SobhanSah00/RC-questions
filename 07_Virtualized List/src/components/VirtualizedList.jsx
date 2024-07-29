import { useState } from "react"
import PropTypes from "prop-types"

function VirtualizedList({ List , ContainerHeight , ContainerWidth , ItemHeight}) {
    const [indises,setIndises] = useState([0,Math.floor(ContainerHeight/ItemHeight)])
    const visibleList = List.slice(indises[0], indises[1] + 1);

    const handleScroll = (e) => {
      const scrollPosition = e.target.scrollTop;
      // console.log(scrollPosition);
      const newStartIndex = Math.floor(scrollPosition / ItemHeight);
      const newEndIndex = newStartIndex + Math.floor(ContainerHeight/ItemHeight);
      setIndises([newStartIndex,newEndIndex])
    }

  return (
    <div className="container"
      style={{ height: ContainerHeight, width: ContainerWidth, background : "black", overflowY : "auto" }}
      onScroll={handleScroll}
    >
      <div  style={{height : List.length * ItemHeight, position : "relative"}}>
        {
          visibleList.map((item,index) => {
            return (
              <div  className="items" 
              style ={{height : ItemHeight, 
                backgroundColor : "orange", 
                border : "3px solid black" , 
                borderRadius : "10px",
                position : "absolute",
                top : (indises[0] + index) * ItemHeight,
                width : "100%",
                textAlign : "center"
               }} 
              key={indises[0] + index}>
                {"item " + item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

VirtualizedList.prototype = {
  List:PropTypes.array.isRequired,
  ContainerHeight:PropTypes.number.isRequired,
  ContainerWidth:PropTypes.number.isRequired,
  ItemHeight:PropTypes.number.isRequired
}

export default VirtualizedList