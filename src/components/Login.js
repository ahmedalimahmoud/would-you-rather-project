import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = { userId: '' }
  render() {
    const { userId } = this.state
    const { users } = this.props;
    return (
      <div className='card text-center col-md-6 mx-auto p-0' >
        <div className='card-header'>
        <h4>Welcome to the would you Rather App!</h4>
        <p className='mb-0'>press sign in to continue</p>
        </div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='card-body'>
            <img src="https://camo.githubusercontent.com/fa10d709a46644bca602bbfc78f4859061de4ed383f47765ed95b3645ee70665/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3630302f312a693179726558764b306b477253395f757935714b48512e6a706567" className='m-auto' width='220' />
            <h4 className="my-3 text-success">Sign In</h4>
            <div className="form-group">
              <select id="login-inout" className="form-control" onChange={(event) => this.handleSelectionChanged(event)}>
                <option value="" >Select user...</option>
                {users.map((user) => (
                  <option value={user.id} key={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <button type="submit" disabled={(userId === '')} className="btn btn-success btn-block">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  handleSelectionChanged = (event) => {
    const userId = event.target.value
    this.setState(() => ({
      userId: userId
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const { userId } = this.state
    const { dispatch } = this.props;
    dispatch(setAuthedUser(userId));
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((id) => ({
      id: id,
      name: users[id].name
    }))
  }
}

export default connect(mapStateToProps)(Login)
