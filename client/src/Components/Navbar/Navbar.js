import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export const Navbar=()=>{
  const { user } = useContext(AuthContext);
    return(
        <header className="u-clearfix u-header u-header" id="sec-fbf6">
  <div className="u-clearfix u-sheet u-sheet-1">
    <a href="https://nicepage.com" className="u-image u-logo u-image-1">
      <img
        src="images/default-logo.png="
        alt=""
        className="u-logo-image u-logo-image-1"
      />
    </a>
    <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
      <div
        className="menu-collapse"
        style={{ fontSize: "1rem", letterSpacing: 0 }}
      >
        <a
          className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
          href="/#"
        >
          <svg className="u-svg-link" viewBox="0 0 24 24">
            <use
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="#menu-hamburger"
            />
          </svg>
          <svg
            className="u-svg-content"
            version="1.1"
            id="menu-hamburger"
            viewBox="0 0 16 16"
            x="0px"
            y="0px"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect y={1} width={16} height={2} />
              <rect y={7} width={16} height={2} />
              <rect y={13} width={16} height={2} />
            </g>
          </svg>
        </a>
      </div>
      <div className="u-nav-container">
        
          {user.email
            ? <ul className="u-nav u-unstyled u-nav-1">
                    <li className="u-nav-item">
          <Link

            className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            to="/Logout"
            style={{ padding: "10px 20px" }}
          >
            Logout
          </Link>
                    </li>
                    <li className="u-nav-item">
            <Link

              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              to="/"
              style={{ padding: "10px 20px" }}
            >
              Home
            </Link>
                   </li>
                    <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              href="Memes.html"
              style={{ padding: "10px 20px" }}
            >
              Memes
            </a>
                   </li>
                   <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              href="About-us.html"
              style={{ padding: "10px 20px" }}
            >
              About us
            </a>
                   </li>
              </ul>

            :<ul className="u-nav u-unstyled u-nav-1">
                    <li className="u-nav-item">
            <Link

              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              to="/"
              style={{ padding: "10px 20px" }}
            >
              Home
            </Link>
                   </li>
                    <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              href="Memes.html"
              style={{ padding: "10px 20px" }}
            >
              Memes
            </a>
                   </li>
                    <li className="u-nav-item">
            <a
              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              href="About-us.html"
              style={{ padding: "10px 20px" }}
            >
              About us
            </a>
                   </li>
                   <li className="u-nav-item">
            <Link

              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              to="/login"
              style={{ padding: "10px 20px" }}
            >
              Login
            </Link>
                   </li>
                   <li className="u-nav-item">
            <Link

              className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
              to="/register"
              style={{ padding: "10px 20px" }}
            >
              Register
            </Link>
                  </li>
             </ul>
          }
          
        
          
     
       
       
      </div>
      
    </nav>
  </div>
</header>

    )
}