import { NavLink } from "react-router-dom";
import { MAINPAGE_PATH, 
  FAVORITEMOVIES_PATH,
  LOGIN_PATH,
} from "../../paths/Paths";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
}



function Layout({children}: LayoutProps){

  const navigate = useNavigate();
  

  function handleLogOut(){
    sessionStorage.clear();
    navigate(LOGIN_PATH)
  }


    return(
    <div className="Head">
      <nav className="Navigation">
       
       <button onClick={() => navigate(FAVORITEMOVIES_PATH)}>
        Favorites 
       </button>
     
        
        <button onClick={() => navigate(MAINPAGE_PATH)}> 
        Main Page
        </button>

        <button onClick={handleLogOut}>
          Logout
        </button>
   
      </nav>
      {children}
    </div>
    );

}


export default Layout;