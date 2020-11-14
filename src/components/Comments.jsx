import React from 'react'
import CommentListitem from "./CommentListitem"
const Comments = ({ comments }) => {
    return comments.map(comment => <CommentListitem key={comment.id} comment={comment} />)
}

export default Comments

