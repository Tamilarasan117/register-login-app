/* Write your code here */
import './registration.css'

const Register = (props) => {
  const {onClick} = props
  return (
    <form action="index.js" method="get" className="register-form"> 
      <div className="register-form-card"> 
        <h1 className="register-heading">Register</h1> 
        <div className="feild-card"> 
          <div> 
            <input type="input" className="register-input-field" required /> 
            <i className="register-text">Username</i> 
          </div>
          <div> 
            <input type="email" className="register-input-field" required /> 
            <i className="register-text">Email</i> 
          </div>
          <div> 
            <input type="text" className="register-input-field" required /> 
            <i className="register-text">Phone Number</i> 
          </div>
          <div> 
            <input type="password" className="register-input-field" required /> 
            <i className="register-text">Password</i> 
          </div> 
          <div className="register-link-container"> 
            <a href="index.js" className="register-link link1">Forgot Password</a> 
            <a href="index.js" className="register-link link2">Login</a> 
          </div> 
          <div> 
            <button type="submit" className="register-button" onClick={onClick}>Register</button> 
          </div> 
        </div> 
      </div> 
    </form> 
  )
}

export default Register
