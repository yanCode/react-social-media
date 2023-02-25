import './login.scss'
import {AuthContext} from "../../context/authContext";
import {useContext} from "react";
import {Link} from "react-router-dom";

const Login = () => {
  const {login} = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault()
    login();
  }
  return (<div className="login">
    <div className="card">
      <div className="left">
        <h1>Hello world.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eius fuga mollitia necessitatibus nihil, odit
          quis vel vitae. Ab ad commodi consectetur cupiditate, iusto minima omnis optio pariatur voluptate
          voluptatum?</p>
        <span>Don't you have an account?</span>
        <Link to="/register">
           <button>Register</button>
        </Link>

      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  </div>)
}

export default Login