import { Form, Button } from "antd";
import { useNavigate } from "react-router";
import { LOGIN_PATH, SIGNUP_PATH } from "../../paths/Paths";
import "./HomePage.css";


function HomePage(){

    const navigate = useNavigate();


    return(

        <div className="main">
            <h2>Welcome to my movie webste!</h2>
            <h3>Here you can save and look up movies from the TMDB Website !</h3>

            <Button onClick={() => navigate(LOGIN_PATH)}> Login </Button>
            <Button onClick = {() => navigate(SIGNUP_PATH)}>Sign up </Button>


        </div>

    )

}


export default HomePage;

