import React, { useState } from 'react';
import { saveUser } from '../../redux/action/auth';
import './login.css';

const Login = ({ dispatch }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = () => {
        if (username && password) {
            setErrorMsg('');
            dispatch(saveUser({ username, password }));
            setUsername('');
            setPassword('');
        } else if (!username && !password) {
            setErrorMsg('username and password is missing');
        } else {
            if (!username) {
                setErrorMsg('username is missing')
            }

            if (!password) {
                setErrorMsg('password is missing')
            }
        }
    }

    return (
        <div className='container'>
            <div className='inner-container'>
                <h1>Welcome to React Testing</h1>
                <div className="wrapper">
                    <div className="inner-wrapper">
                        <div className='input-wrap'>
                            <label htmlFor='user'>Username </label>
                            <input
                                type='text'
                                id='user'
                                placeholder='Enter user name'
                                vlaue={username}
                                className='form_input'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='input-wrap'>
                            <label htmlFor='pwd'>Password </label>
                            <input
                                type='password'
                                id='pwd'
                                placeholder='Enter password'
                                className='form_input'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div style={{ fontSize: '20px', marginBottom: '20px', color: 'darkred' }}>{errorMsg}</div>
                        <div>
                            <button
                                type='submit'
                                className='submit_btn'
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login;