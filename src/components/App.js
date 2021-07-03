import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import NavigationBar from './NavigationBar';
import Questions from './Questions'
import QuestionDetail from './QuestionDetail'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import NotFound from './NotFound'

import Login from './Login'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { initialized, authorized } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {initialized &&
              <NavigationBar />
            }
            {(authorized && initialized) &&
              <Fragment>
                <Switch>
                  <Route path='/' exact component={Questions} />
                  <Route path='/questions/:id' component={QuestionDetail} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                  <Route component={NotFound} />
                </Switch>
              </Fragment>
            }
            {(!authorized && initialized) &&
              <Login />
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    users,
    initialized: Object.keys(users).length > 0 && Object.keys(questions).length > 0,
    authorized: authedUser != null
  }
}

export default connect(mapStateToProps)(App)
