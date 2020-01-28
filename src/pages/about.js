import React from 'react';
import { Link } from 'gatsby'
import Layout from "../components/layout"

const about = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I am a developer learning to use Gatsby.js. WOO!</p>
            <br/>
            <p>
                <Link to='/contact'>Contact me</Link> for more information.
            </p>
        </Layout>
    );
}

export default about;
