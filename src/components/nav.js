import React from 'react';
import { Link } from 'gatsby'

const nav = () => {
    return (
        <div>
            <p>
                <Link to="/"> Home</Link> |
                <Link to="/about"> About</Link> |
                <Link to="/contact"> Contact</Link> |
                <Link to="/blog"> Blog</Link>
            </p>
        </div>
    );
}

export default nav;
