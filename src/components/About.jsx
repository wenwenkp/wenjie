import React from 'react';
import avatar from '../sass/images/myAvatar.png';
import bootstrap from '../sass/images/skills/bootstrap.png'
import c from '../sass/images/skills/c.png'
import css from '../sass/images/skills/css.png'
import django from '../sass/images/skills/django.png'
import git from '../sass/images/skills/git.png'
import github from '../sass/images/skills/github.png'
import heroku from '../sass/images/skills/heroku.png'
import html from '../sass/images/skills/html.png'
import java from '../sass/images/skills/java.png'
import jquery from '../sass/images/skills/jquery.png'
import js from '../sass/images/skills/js.png'
import mongodb from '../sass/images/skills/mongodb.png'
import node from '../sass/images/skills/node.png'
import npm from '../sass/images/skills/npm.png'
import psql from '../sass/images/skills/psql.png'
import react from '../sass/images/skills/react.png'
import sass from '../sass/images/skills/sass.png'
import express from '../sass/images/skills/express.png'
import python from '../sass/images/skills/python.png'
import soccer from '../sass/images/skills/soccer.png'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about--title">
                About
            </div>
            <div className="about--avatar">
                <img src={avatar} alt="My Avatar" />
            </div>

            <div className="about--intro">
                <div className="about--intro--key">
                    Wenjie loves to go the <span>extra mile</span> to complete the work. 
                    With his study in <span>hospitality</span> and <span>information technology</span>, he believes <span>user experience</span> is one of the most important factors for a company to become <span>successful</span>.
                    He has passions in providing excellent user experiences through modern <span>web technology</span>. And he has strong foundation knowledge in web development, fluent in <span>front-end</span> and <span>back-end</span> languages and frameworks.
                </div>
                <div className="about--intro--key">
                    With his previous education background and working experience, he has become a strong <span>detail oriented</span>, <span>organized</span> person and developed an acute ability to identify people's needs. With the experiences of working in a <span>fast paced</span> work environment for a couple years have developed his ability to handle <span>multiple tasks</span> and strong <span>organization skills</span>.
                </div>
                <div>
                    <h3>Technical Skills & Tools</h3>
                    <h4>Language & Frameworks</h4>
                    <p>JavaScript, Python3, React, Node.js, Express, Django, Bootstrap, <br/> 
                        HTML5, CSS3, SASS, jQuery, Java, C Language, Third-Party APIs.</p>
                    <h4>Management & Deployment</h4>
                    <p>Git, GitHub, Heroku.</p>
                    <h4>Database</h4>
                    <p>MongoDB, Mongoose, PostgreSQL.</p>
                    <h4>Methodologies</h4>
                    <p>Object Oriented Programming, MVC Pattern, Responsive Design, User Authentication.</p>
                    <h4>Spoken Language</h4>
                    <p>English, Cantonese, Mandarin.</p>
                </div>
            </div>
            <div className="about--skills">
                <img className="about--skill1" src={html} />
                <img className="about--skill1" src={css} />
                <img className="about--skill1" src={js} />
                <img className="about--skill1" src={python} />
                <img className="about--skill1" src={react} />
                <img className="about--skill1" src={git} />
                <img className="about--skill1" src={github} />
                <img className="about--skill1" src={node} />
                <img className="about--skill1" src={npm} />
                <img className="about--skill1" src={django} />
                <img className="about--skill1" src={express} />
                <img className="about--skill1" src={sass} />
                <img className="about--skill1" src={bootstrap} />
                <img className="about--skill1" src={psql} />
                <img className="about--skill1" src={mongodb} />
                <img className="about--skill1" src={heroku} />
                <img className="about--skill1" src={java} />
                <img className="about--skill1" src={c} />
                <img className="about--skill1" src={jquery} />
                <img className="about--skill1" src={soccer} />
            </div>
        </div>
    )
}

export default About;

