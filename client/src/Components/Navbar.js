import {Link} from 'react-router-dom'
export const NavbarComponent=()=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
        <div className="wrapper">
          
        </div>
  <div className="container-fluid all-show">
    <Link className="navbar-brand" to="/">Penton <i className="fa fa-codepen"></i></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#/">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#/">Memes</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="#/">Logout</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="#/"><i className="fa fa-search"></i></Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
      );
}

