import React from 'react';
import Footer from "../components/footer";

const contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <form action="mailto:sptlonergan@gmail.com">
                <ul>
                    <li>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="user_name"></input>
                    </li>
                    <li>
                        <label for="mail">E-mail:</label>
                        <input type="email" id="mail" name="user_mail"></input>
                    </li>
                    <li>
                        <label for="msg">Message:</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>
                </ul>
            </form>
            <br/>
            <p>Or you can reach me on twitter <a href="https://twitter.com/shane__lonergan">@shane__lonergan</a></p>
            <Footer/>
        </div>
    );
}

export default contact;
