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
            {/* <a name="about" className="about--tag"></a> */}
            <div className="about--title">
                About
            </div>
            <div className="about--avatar">
                <img src={avatar} alt="My Avatar" />
            </div>
            <div className="about--skills">
                <img className="about--skill1" src={bootstrap} />
                <img className="about--skill1" src={c} />
                <img className="about--skill1" src={css} />
                <img className="about--skill1" src={django} />
                <img className="about--skill1" src={git} />
                <img className="about--skill1" src={github} />
                <img className="about--skill1" src={heroku} />
                <img className="about--skill1" src={html} />
                <img className="about--skill1" src={java} />
                <img className="about--skill1" src={jquery} />
                <img className="about--skill1" src={js} />
                <img className="about--skill1" src={mongodb} />
                <img className="about--skill1" src={node} />
                <img className="about--skill1" src={npm} />
                <img className="about--skill1" src={psql} />
                <img className="about--skill1" src={react} />
                <img className="about--skill1" src={sass} />
                <img className="about--skill1" src={express} />
                <img className="about--skill1" src={python} />
                <img className="about--skill1" src={soccer} />
            </div>
            <div className="about--intro1">
                <p>
                    Wenjie is a Web Developer with strong foundation knowledge in front-end and back-end. He started to develop his web-development skills at the University of Massachusetts, and strengthen his skills in General Assembly, San Francisco campus as a full-stack developer.
                </p>
                <p>
                    With his previous education background in hospitality management and his working experience in the healthcare industry, he has become a strong detail oriented, organized person and developed an acute ability to identify customer needs, and he is a person who would like to go the extra mile to complete the work. With the experiences of working in a fast paced work environment for a couple years have developed his ability to handle multiple tasks and strong organization skills.
                </p>
            </div>
            <div className="about--intro2">
                <p>
                    <h4>Technical Skills & Tools</h4>
                    <h5>Language & Frameworks</h5>
                    JavaScript, Python3, React, Node.js, Express, Django, Bootstrap, HTML5, Css3, Sass, jQuery, Java, C, Third-Party APIs
                    <h5>Management & Deployment</h5>
                    Git, GitHub, Heroku
                    <h5>Database</h5>
                    MongoDB, Mongoose, PostgreSQL
                    <h5>Methodologies</h5>
                    Object Oriented Programming, MVC Pattern, Responsive Design, Authentication
                </p>
            </div>
        </div>
    )

}

export default About;

