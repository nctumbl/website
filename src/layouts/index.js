import React from 'react'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

export default ({ children }) => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
    <Navigator />
    { children() }
    <Footer />
  </div>
)