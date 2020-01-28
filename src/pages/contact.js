import React from 'react';

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
        </div>
    );
}

export default contact;
