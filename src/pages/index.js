import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="container">
    <div className="post__content">
        <h2 className="post__content__title">about</h2>
        <div className="post__content__body">
          <p>Chrystal is a Javascript Engineer from the UK living in the Netherlands.</p>
          <p>As well as Javascript, she likes pretty, vintage skirts; walking and foam bananas.</p>
        </div>
        <a className="social-icon" href="http://github.com/chrystalgriffiths"><i className="devicon devicon-github-original"></i></a>
        <a className="social-icon" href="http://twitter.com/chrystaldev"><i className="devicon devicon-twitter-original"></i></a>
    </div>
  </div>
)

export default IndexPage
