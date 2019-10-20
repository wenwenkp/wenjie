import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <a name="projects--tag"></a>
            <div className="projects--title">Projects</div>
            <div className="projects--p4">
                <h1>MovieGuy</h1>
                <ul>
                    <li>
                    Offer movie search and exploration for user, user can save movies as favourite.
                    </li>
                    <li>
                    A MERN-stack web application, developed with JavaScript, MongoDB, Express, React and Node, Sass. * Deployed project in Heroku.
                    </li>
                    <li>
                    Used animations to improve user experience.
                    </li>
                </ul>
                <a href="#">Open source on GitHub</a>
                <a href="#">Launch Site</a>
            </div>
            <img className="projects--p4--img" src="https://media.giphy.com/media/Ih6uczYa6PcnrK3Duz/giphy.gif" alt="movieguy"/>

            <div className="projects--p2">projects 2</div>
            <div className="projects--p3">projects 3</div>
            <div className="projects--p1">projects 1</div>
        </div>
    )
}

export default Projects;

