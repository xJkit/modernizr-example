import React from 'react'
import ReactDOM from 'react-dom'

// Load routes
import routes from 'routes'

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'

ReactDOM.render(
  routes,
  document.getElementById('app')
);
