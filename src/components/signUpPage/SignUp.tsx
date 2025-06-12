import {  Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../../store/Authentication/authSlice";
import { type AppDispatch, type RootState } from "../../store/store";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { MAINPAGE_PATH } from "../../paths/Paths";
import "./SingUp.css";



function SignUp() {
    const dispatch = useDispatch<AppDispatch>();
    const email = useSelector((state: RootState) => state.auth.email);
    const password = useSelector((state: RootState) => state.auth.password);
    const navigate = useNavigate()

    async function handleAccountCreation() {
        try {
            const createAccountAttempt = await createUserWithEmailAndPassword(auth, email, password);
            sessionStorage.setItem("userToken", createAccountAttempt.user.uid);
            alert("Everything works fine");
            navigate(MAINPAGE_PATH);
        }
        catch (err) {
            console.log("Error with creating an account", err);
        }
    }


    return (

        <div className="form">

            <h2>Please fill out these forms to create your account</h2>

            <Input
                className="Input"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                style={{ width: 300 }}
            />

            <Input
                className="Input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                style={{ width: 300 }}

            />



            <Button onClick={handleAccountCreation}>Create an account</Button>

        </div>

    )

}



export default SignUp;