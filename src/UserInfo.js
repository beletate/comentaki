import React, { useState, useContext } from 'react'
import { AuthContext } from './auth'

const FormDisplayName = ({ displayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const onChange = evt => {
        setNewDisplayName(evt.target.value)
    }

    const save = () => {
        if (newDisplayName !== '') {
            user.updateProfile({ displayName: newDisplayName })
        }
    }
    return (
        <React.Fragment>
            <input type='text' value={newDisplayName} onChange={onChange} />
            <button className='mx-2 btn btn-outline-success' onClick={save}>Save Display Name</button>
        </React.Fragment>
    )
}

const UserInfo = () => {
    const auth = useContext(AuthContext)

    if (auth.user === null) {
        return null
    }

    const { displayName } = auth.user

    const [alternativeDisplayName] = auth.user.email.split('@')

    const dn = displayName || alternativeDisplayName

    return (
        <React.Fragment >
            <p>Olá {dn}!</p>

            <FormDisplayName displayName={dn} user={auth.user} />

            <button className='btn btn btn-outline-danger' onClick={auth.signout}>Sair</button>
        </React.Fragment>
    )
}
export default UserInfo