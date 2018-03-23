import React from 'react'
import Helmet from 'react-helmet'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

export default ({ children }) => (
  <div>
    <Helmet>
      <title>MBL@NCTU</title>
      <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
    </Helmet>
    <Navigator />
    { children() }
    <Footer />
  </div>
)