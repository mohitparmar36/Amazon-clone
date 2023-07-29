import React, { useState } from 'react'
import './Login.css';
import {Link , useNavigate} from "react-router-dom";
import {auth} from './firebase';

function Login() {
    
    const history = useNavigate();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const login = event =>{
        event.preventDefault();  // this stops the refresh

        auth.signInWithEmailAndPassword(email,password)
         .then((auth)=>
         
         {
            history("/");
         }
         
         )
         .catch((e)=> alert(e.message));
    }
    const register = event =>{
        event.preventDefault();  // this stops the refresh

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>
         
         {
            history("/");
         }
         
         )
         .catch((e)=> alert(e.message));

    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
            <h5>Email</h5>
            <input type="email" name="" value={email} onChange={event => setEmail(event.target.value)}/>
            <h5>Password</h5>
            <input type="password" onChange={event => setPassword(event.target.value)} name="" value={password}/>
            <button onClick={login} className="login__signInButton" type="submit">Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register} className="login__registerButton" type="">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login
