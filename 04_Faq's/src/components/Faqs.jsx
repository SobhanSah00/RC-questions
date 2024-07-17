import Accordion from "./Accordion"
import data from "../data.json"

function Faqs() {
  console.log(data);
  return (
    <div>
      <h1>FAQ'S</h1>
        {
          data.faqs.map((obj,index) => {
            return (
              <Accordion key={index} qna={obj} />
            )
          })
        }
    </div>
  )
}

export default Faqs