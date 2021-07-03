import React, { Component, Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'
import Questions from './Questions'
import QuestionDetail from './QuestionDetail'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import NotFound from './NotFound'

class Routes extends Component{
  render(){
    return (
            <Fragment>
              <Switch>
                <Route path='/' exact component={Questions} />
                <Route path='/questions/:id' component={QuestionDetail} />
                <Route path='/add' exact component={NewQuestion} />
                <Route path='/leaderboard' exact component={LeaderBoard} />
                <Route component={NotFound} />
              </Switch>
            </Fragment>
    )
  }
}

export default Routes
