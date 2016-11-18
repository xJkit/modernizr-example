import React from 'react'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'

// Load components
import Main from 'Main'
import NotFound from 'NotFound'

// root path
const ROOT = '/'

// routes
const routes = (
  <Router history={browserHistory}>
    <Route path={ROOT} component={Main} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default routes
