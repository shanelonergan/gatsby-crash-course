import React from 'react';
import { Link } from 'gatsby'
import Footer from "../components/footer";

const about = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>I am a developer learning to use Gatsby.js. WOO!</p>
            <br/>
            <p>
                <Link to='/contact'>Contact me</Link> for more information.
            </p>
            <Footer />
        </div>
    );
}

export default about;
