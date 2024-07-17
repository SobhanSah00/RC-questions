import {useState} from "react"

function Accordion({qna}) {

  const [show,setShow] = useState(false)

  return (
   <>
    <div className='accordian'>
      <h3 className='question'>
        {qna.question}
        <span
          onClick={() => setShow(!show)}
        >{show ? '-' : '+'}</span>
      </h3>
      {show ? <p>
        {qna.answer}
      </p> : ""}
    </div>
   </>
  )
}

export default Accordion