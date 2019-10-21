import React from 'react';
import linkedin from '../sass/images/skills/linkedin.png';
import github from '../sass/images/skills/github.png';
import email from '../sass/images/skills/email.png';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact--title">
                Find Me Here
            </div>
            <div className="contact--find">
                <div className="contact--find--linkedin">
                    <p>Linkedin</p>
                    <div>
                        <a href="https://www.linkedin.com/in/li-wenjie/" target="_blank">
                            <img src={linkedin} alt="Linkedin" />
                        </a>
                    </div>
                </div>
                <div className="contact--find--github">
                    <p>Github</p>
                    <div>
                        <a href="https://github.com/wenwenkp" target="_blank">
                            <img src={github} alt="Github" />
                        </a>
                    </div>
                </div>
                <div className="contact--find--email">
                    <p>Email</p>
                    <div>
                        <a href="mailto:666wenjie@gmail.com">
                            <img src={email} alt="Email" />
                        </a>
                    </div>
                </div>
            </div>
            <footer className="contact--footer">
                <p>Email: <a href="mailto:666wenjie@gmail.com">666wenjie@gmail.com</a>&nbsp; &copy; 2019 Wenjie Li All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Contact;

