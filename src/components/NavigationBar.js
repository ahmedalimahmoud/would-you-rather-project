import React, { Component } from 'react'
import { clearAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
  render() {
    const { user } = this.props;
    const authorized = !!user ? true : false;
    return (
      <nav className='navbar navbar-light bg-none mb-4 border-bottom  '>
        <div>
          <Link className='navbar-brand' to={'/'}>Home</Link>
          <Link className='navbar-brand' to={'/add'}>New</Link>
          <Link className='navbar-brand' to={'/leaderboard'}>Leader Board</Link>
        </div>

        {(user && authorized) &&
          <div>
            <div className='navbar-brand' href='#'>
              Hello, {user.name} <img src={user.avatarURL} width='auto' height='30px' className='d-inline-block align-middle rounded-circle' alt='' />
            </div>
            <a
              href="#"
              className='text-dark'
              onClick={this.toggleLogin}>
              Logout
            </a>
          </div>
        }
      </nav>
    )
  }

  toggleLogin = (e) => {
    const { dispatch, authedUser } = this.props;
    const authorized = authedUser !== null;
    if (authorized) {
      dispatch(clearAuthedUser());
      return;
    }

  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser]
  return {
    user
  }
}

export default connect(mapStateToProps)(NavigationBar)
