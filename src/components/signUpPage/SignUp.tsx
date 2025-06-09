import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../../store/Authentication/authSlice";
import { type AppDispatch, type RootState } from "../../store/store";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { MAINPAGE_PATH } from "../../paths/Paths";


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

        <>
            <Form>

                <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Please enter your email" }]}
                >
                    <Input
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}

                    />

                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please enter your password" }]}
                >
                    <Input
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}

                    />

                </Form.Item>


                <button onClick={handleAccountCreation}>Create an account</button>


            </Form>



        </>

    )

}



export default SignUp;