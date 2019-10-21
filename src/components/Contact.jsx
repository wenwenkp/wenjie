import React from 'react';
import linkedin from '../sass/images/skills/linkedin.png';
import github from '../sass/images/skills/github.png';
import email from '../sass/images/skills/email.png';

const Contact = () => {
    return (

        <div className="contact" id="contact">
            <div className="contact--title">
                find me here
            </div>
            <div className="contact--find">
                <div className="contact--find--linkedin">
                    <p>Linkedin</p>
                    <div>
                        <a href="#">
                            <img src={linkedin} alt="Linkedin"/>
                        </a>
                    </div>
                </div>
                <div className="contact--find--github">
                    <p>Github</p>
                    <div>
                        <a href="#">
                            <img src={github} alt="Github"/>
                        </a>
                    </div>
                </div>
                <div className="contact--find--email">
                    <p>Email</p>
                    <div>
                        <a href="#">
                            <img src={email} alt="Email"/>
                        </a>
                    </div>
                </div>
            </div>
            <footer className="contact--footer">
                <p>Email: 666wenjie@gmail.com&nbsp; &copy; 2019 Wenjie Li All rights reserved.</p>
            </footer>
        </div>
    )

}

export default Contact;

