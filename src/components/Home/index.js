// Write your code here
import './index.css'
import {Component} from 'react'
import Login from '../Login'
import Register from '../Register'

class Home extends Component {
  state = {isLoggedin : true}
  onClickButton = () => {
    this.setState(result => {
      return ({isLoggedin : !result.isLoggedin})
    })
  }

  render() {
    const {isLoggedin} = this.state
    console.log(isLoggedin)
    return (
      <div className="app-container">
        <section className='container'>
          <section className="container background-box">
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span> <span></span>
          </section>
          {
            isLoggedin 
              ? 
                (<Login onClick={this.onClickButton} />) 
              : 
                (<Register onClick={this.onClickButton} />) 
          }
        </section>
      </div>
    )
  }
}

export default Home