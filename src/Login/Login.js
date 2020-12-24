import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

import './Login.css';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();

        try {
            const authUser = await auth.signInWithEmailAndPassword(email, password);
            if (authUser) {
                console.log('signed in')
                history.push('/');
            }
        } catch (e) {
            alert(`Something went wrong: ${e.message}`);
        }
    };
    const register = async (e) => {
        try {
            const user = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            if (user) {
                history.push('/');
            }
            console.log(user); 
        } catch (e) {
            alert('Something went wrong');
            console.log(e.message);
        }
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={signIn}
                        type="submit"
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By continuing, you agree to Robert's Conditions of Use and
                    Privacy Notice, which is to hire him.
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
