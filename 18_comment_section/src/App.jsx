// import "./App.css"
import { useState } from "react"
import CommentBox from "./components/CommentBox"
import CommentData from "../Comments.data.json"


function App() {
  const [comments,setComments] = useState(CommentData.comments)
  return (
    <div>
      <CommentBox comments={comments[1]} allComments={comments}  />
    </div>
  )
}

export default App