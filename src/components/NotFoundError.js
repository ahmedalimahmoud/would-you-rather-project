import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div className='not-found text-center' >
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
        <p> <Link className='navbar-brand btn btn-primary' to={'/'}>go Home</Link></p>
      </div>
    )
  }
}

export default NotFound
