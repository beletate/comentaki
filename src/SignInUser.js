import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
    const auth = useContext(AuthContext)

    const [form, setForm] = useState({ email: '', passwd: '' })
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }
    if (auth.user !== null) {
        return null
    }
    return (
        <React.Fragment>
            <h3 style={{color: '#3297c9'}}>Entre com uma conta:</h3>
            {
                auth.signInUser.signInUserState.error !== '' &&
                <p>{auth.signInUser.signInUserState.error}</p>
            }
            {JSON.stringify()}
            <div className='row justify-content-md-center'>
                <div className='col-md-auto'>
                    <input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
                </div>
                <div className='col-md-auto'>
                    <input type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
                </div>
                <div className='col-md-auto'>
                    <button className='btn btn-success' onClick={() => {
                        auth.signInUser.signInUser(form.email, form.passwd)
                    }}>Entrar</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignInUser