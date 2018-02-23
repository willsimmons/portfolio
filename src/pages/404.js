import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const NotFound = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>404</h1>
            </header>
            <div className="content">
                <p>Nothing to See here.</p>
                <ul className="actions">
                    <li><a href="/" className="button">Go to Home</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default NotFound