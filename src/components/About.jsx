import React from 'react';
import avatar from '../sass/images/myAvatar.png';

const About = () => {
    return (

        <div className="about">
            <a name="about" className="about--tag"></a>
            <div className="about--title">
                About
            </div>
            <div className="about--avatar">
                <img src={avatar} alt="My Avatar"/>
            </div>
            <div className="about--skills">
                skill icons
            </div>
            <div className="about--intro1">
                intro 1
            </div>
            <div className="about--intro2">
                intro 2
            </div>
        </div>
    )

}

export default About;

