import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { HOME_PATH, MAINPAGE_PATH } from "../../paths/Paths";
import { setCurrentUser } from "../../store/Authentication/authSlice";
import { useDispatch } from "react-redux";
import { Button, Input } from "antd";
import './Login.css'

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleEmailSignIn = async () => {
    try {
      const signInAttempt =  await signInWithEmailAndPassword(auth, email, password);
      
      sessionStorage.setItem("userToken",signInAttempt.user.uid );
      dispatch(setCurrentUser(sessionStorage.getItem("userToken")));
      navigate(MAINPAGE_PATH);
      
    } catch (err: any) {
      setError(err.message);
    }
  };



  return (
    <div className="loginForm">
      <h1>Welcome</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        autoComplete="email"
      />
      <br />

      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        autoComplete="current-password"
      />
      <br />

      <Button onClick={handleEmailSignIn}>Log In</Button>
      <br />

  
      <Button onClick = {() => navigate(HOME_PATH)}>Back Home</Button>
    </div>
  );
}
