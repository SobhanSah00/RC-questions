import React, { useState } from 'react'

function ReplyComment({setShowReplay}) {
  const [comment, setComment] = useState('')
  const HandelPostReplay = () => {
    setComment("");
    setShowReplay(false)
  }
  return (
    <div>
        <textarea 
          className='post-comment-area' 
          value={comment}
          onChange={(e) => setComment(e.target.value)} 
        />

        
        <button 
          className="post-comment-reply" 
          onClick={HandelPostReplay}
        >
            post Reply
        </button>
    </div>
  )
}

export default ReplyComment