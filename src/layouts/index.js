import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

import '../fonts/chrystal/stylesheet.css'
import '../fonts/devicon/devicon.min.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="chrystal"
      meta={[
        { name: 'description', content: 'the home of chrystal griffiths' }
      ]}
    />
    <Header/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
