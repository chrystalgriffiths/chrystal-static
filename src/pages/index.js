import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="container">
    <div className="post__content">
        <h2 className="post__content__title">about</h2>
        <div className="post__content__body">
          <p>Chrystal is a Javascript Engineer from the Midlands living in London.</p>
          <p>As well as Javascript, Ruby and Erlang; she likes pretty, vintage skirts; walking and foam bananas.</p>
        </div>
        <a className="social-icon" href="http://github.com/chrystalgriffiths"><span className="devicons devicons-github_badge"></span></a>
        <a className="social-icon" href="http://twitter.com/chrystaldev"><i className="fa fa-twitter"></i></a>
    </div>
  </div>
)

export default IndexPage
