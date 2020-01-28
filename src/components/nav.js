import React from 'react';
import { Link } from 'gatsby'

const nav = () => {
    return (
        <header>
            <p>
                Shane Lonergan |
                <Link to="/"> Home</Link> |
                <Link to="/about"> About</Link> |
                <Link to="/contact"> Contact</Link> |
                <Link to="/blog"> Blog</Link>
            </p>
        </header>
    );
}

export default nav;
