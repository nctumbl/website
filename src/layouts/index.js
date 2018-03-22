import React from 'react'
import Navigator from '../components/Navigator'

import 'bootstrap/dist/css/bootstrap.css'

export default ({ children }) => (
  <div>
    <Navigator />
    { children() }
  </div>
)