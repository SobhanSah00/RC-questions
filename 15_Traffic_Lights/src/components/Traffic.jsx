import {useState} from "react"
import Signal from './Signal'

function Traffic({lightColor = ['green','yellow','red']}) { //
  const [light, setLight] = useState(0)

  return (
    <>
       {
          lightColor.map((eachColor,index) => {
            return (
              <Signal color={eachColor} key={index} />
            )
          })
       }
    </>
      // {/* {
      //   lightColor.map((eachColor,index) => {
      //     <Signal color={eachColor} key={index} />
      //   })
      // } */}
     
   
  )
}

export default Traffic