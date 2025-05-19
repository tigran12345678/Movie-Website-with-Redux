import { NavLink } from "react-router-dom";

function Layout({children}){
    
    return(
    <div className="Head">
      <nav className="Navigation">
       
       <button>
        <NavLink to="/favoriteMovies" end>
          Favorites
        </NavLink>
       </button>
     
        
        <button> 
        <NavLink to="/mainPage" end>
          Home
        </NavLink>
        </button>

        <button>
          <NavLink to = "/" end>
          Logout
          </NavLink>
        </button>
   
      </nav>
      {children}
    </div>
    );

}


export default Layout;