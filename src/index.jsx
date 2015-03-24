import less from './less/app.less'
import React from 'react'
import AppComponent from './components/app.jsx'

// React dev tools
if (typeof window !== 'undefined') {
  window.react = React
}

React.render(<AppComponent />, document.getElementById('app'))
