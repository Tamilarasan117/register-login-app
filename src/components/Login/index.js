/* Write your code here */
import './login.css'

const Login = (props) => {
  const {onClick} = props
  return (
    <form action="index.js" method="get" className="login-form"> 
      <div className="form-card"> 
        <h1 className="heading">Login</h1> 
        <div className="feild-card"> 
          <div> 
            <input type="input" className="input-field" required /> 
            <i className="text">Username / Email</i> 
          </div> 
          <div> 
            <input type="password" className="input-field" required /> 
            <i className="text">Password</i> 
          </div> 
          <div className="link-container"> 
            <a href="index.js" className="link link1">Forgot Password</a> 
            <a href="index.js" className="link link2">Register</a> 
          </div> 
          <div> 
            <button type="submit" className="button" onClick={onClick}>Login</button> 
          </div> 
        </div> 
      </div> 
    </form> 
  )
}

export default Login
