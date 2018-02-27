import React from 'react'
import moment from 'moment'

const Footer = () => (
    <footer className="site-footer clearfix">
        <section className="copyright"> made with <i className="fa fa-heart"></i> in { moment().format('YYYY') }</section>         
    </footer>
)

export default Footer
