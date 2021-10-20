import { Link, useHistory } from "react-router-dom";

export default function Header(props) {
    const history = useHistory()
    
    const logout = () =>{
        localStorage.removeItem('login')
        history.push("/")
        props.setlogin(false);
    };
    
    return(
      <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flew-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
                <Link to="/"  className="nav-link link-dark px-2 active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about"  className="nav-link link-dark px-2 active" aria-current="page">About</Link>
            </li>
                <Link to="/todos"  className="nav-link link-dark px-2 active" aria-current="page">Todos</Link>
          </ul>
          <ul className="nav">
              {
                (props.isLogin===true)?
                  <li className="nav-item">
                    <button type="button" className="btn btn-danger m-1" onClick={logout}>Logout</button>
                  </li>:
                  <li className="nav-item"> 
                    <Link to="/login"><button type="button" className="btn btn-primary m-1">Login</button></Link>
                  </li>
              }    
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <span className="fs-4">My first React App</span>
          </a>
        </div>
      </header>
      </>
    )
  }