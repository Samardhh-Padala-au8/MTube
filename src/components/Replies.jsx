import React from 'react'
import RepliesListitem from './RepliesListitem'

const Replies = ({replies}) => {
    return replies.comments.map(replie => <RepliesListitem key={replie.id} replies={replie} />)
}

export default Replies
