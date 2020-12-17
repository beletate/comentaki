import React from 'react'
import Time from './Time'

const Comment = ({ comment }) => {
    return (
        <div style={{fontSize: '20px', marginTop: '10px'}}>
            {comment.content} por: {comment.user.name} em: <Time timestamp={comment.createAt} />
        </div>
    )
}

export default Comment