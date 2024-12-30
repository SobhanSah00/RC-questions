import React, { useState } from 'react'
import ReplyComment from './replyComment'

function CommentBox({comments,allComments}) {
  const [showReplay, setShowReplay] = useState(false)
  const handelShowReplay = () => {
    setShowReplay(!showReplay)
  }
  return (
    <div className="comment-container">
      <div className='comment-header'>
        <p>{comments.value}</p>
        <div className='comment-action'>
          <button className="reply-btn" onClick={handelShowReplay}>
            {
              showReplay ? 'cancle' : 'Reply'
            }
          </button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      {
        showReplay && <ReplyComment setShowReplay={setShowReplay}/>
      }
      <div className='nested-comments'>
        {
          comments.children.map((childId) => {
            return (
              <CommentBox key={childId} comments={allComments[childId]} allComments={allComments}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default CommentBox