import React, { useState} from 'react'
import { useDataBasePush} from './database'
import firebase from './firebase'
const NewComment = props => {
    const [, save] = useDataBasePush('comments')
    const [comment, setComment] = useState('')

    const createComment = () => {
        if (comment !== '') {
            save({
                content: comment,
                createAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: '1',
                    name: 'Vinicius'
                }
            })
            setComment('')
        }
    }
    return (
        <div>
            <textarea value={comment} onChange={evt => setComment(evt.target.value)} />
            <button onClick={createComment}>Comentar</button>
        </div>
    )
}

export default NewComment