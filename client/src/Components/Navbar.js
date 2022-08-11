
export const NavbarComponent=()=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
        <div className="wrapper">
          
        </div>
  <div className="container-fluid all-show">
    <a className="navbar-brand" href="#/">Penton <i className="fa fa-codepen"></i></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">Memes</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/">Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/">Logout</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/">Register</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/"><i className="fa fa-search"></i></a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
      );
}

