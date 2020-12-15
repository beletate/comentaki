import React, { useState, useContext} from 'react'
import { useDataBasePush} from './database'
import firebase from './firebase'
import { AuthContext} from './auth'
const NewComment = props => {
    const [, save] = useDataBasePush('comments')
    const [comment, setComment] = useState('')
    
    const auth = useContext(AuthContext)

    if(auth.user === null){
        return null
    }
    const { displayName }  = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')

    const createComment = () => {
        if (comment !== '') {
            save({
                content: comment,
                createAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: auth.user.uid,
                    name: displayName || alternativeDisplayName
                }
            })
            setComment('')
        }
    }
    return (
        <div>
            <textarea value={comment} onChange={evt => setComment(evt.target.value)} />
            <br/>
            <button onClick={createComment}>Comentar</button>
        </div>
    )
}

export default NewComment