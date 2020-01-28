import React from 'react';
import { Link } from 'gatsby'
import navStyles from './nav.module.scss'

const nav = () => {
    return (
        <header style={{'text-align':'center'}}>
            <p>
                Shane Lonergan |
                <Link to="/" className={navStyles.link}> Home</Link> |
                <Link to="/about"> About</Link> |
                <Link to="/contact"> Contact</Link> |
                <Link to="/blog"> Blog</Link>
            </p>
        </header>
    );
}

export default nav;
