import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  changeState = () => {
    this.setState(prevSate => {
      console.log(`hii`)
      return {
        isLogin: !prevSate.isLogin,
      }
    })
  }

  render() {
    const {isLogin} = this.state
    let showButton
    let showMessage

    if (isLogin === false) {
      showMessage = 'Please Login'
      console.log(`before`)
      showButton = <Login onClick={this.changeState} />
      //   this.setState(prevSate => {
      //     isLogin: !prevSate.isLogin
      //   })
    } else {
      showMessage = 'Welcome User'
      showButton = <Logout onClick={this.changeState} />
      //   this.setState(prevSate => {
      //     isLogin: !prevSate.isLogin
      //   })
    }
    return (
      <div className="bg-container">
        <Message message={showMessage} />

        {showButton}
      </div>
    )
  }
}

export default Home
