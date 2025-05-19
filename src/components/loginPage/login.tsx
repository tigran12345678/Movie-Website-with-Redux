import {auth, googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";



function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async() => {
      try{
        await createUserWithEmailAndPassword(auth, email, password);
      }
        catch(err){
          console.log(`Oops, error ${err}`);
        }
    };

      const signInWithGoogle = async() => {
      try{
        await signInWithPopup(auth, googleProvider);
      }
        catch(err){
          console.log(`Oops, error ${err}`);
        }

    };

    
    const logOut = async() => {
      try{
        await signOut(auth);
      }
        catch(err){
          console.log(`Oops, error ${err}`);
        }
    };



    return (
      <div className="loginForm">
        <h1>Welcome</h1>
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your E-mail" />
        <br />
        <input 
        type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password" 
        
        />
        
        <br />
        
        <button onClick={signIn}> Enter </button>
        
        <br />

        <button onClick = {signInWithGoogle} >Sign in with Google</button>

        <br />

        <button onClick = {logOut}>Log out</button>
      </div>
    );
  }
  
  export default Login;
  