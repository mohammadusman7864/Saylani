
function Navbar() {
    return (
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">bensik</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>

      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success"  type="submit">sign up</button>
        <button className="btn btn-outline-success" type="submit">sign in</button>
      </form>
    </div>
  </div>
</nav>
</div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  