import React from 'react';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects--title">Projects</div>
            <div className="projects--p4">
                <div className="projects--p4--content">
                    <h1>MovieGuy</h1>
                    <ul>
                        <li>
                            Offer movie search and exploration for user, user can save movies as favourite.
                        </li>
                        <li>
                            A MERN-stack web application, developed with JavaScript, MongoDB, Express, React and Node, Sass. Deployed project in Heroku.
                        </li>
                        <li>
                            Used animations to improve user experience.
                        </li>
                    </ul>
                    <div>
                        <a href="https://github.com/wenwenkp/movie-guy" target="_blank" >Open source on GitHub</a>
                        <a href="https://movieguy.herokuapp.com/" target="_blank" >Launch Site</a>
                    </div>
                </div>
                <a href="https://github.com/wenwenkp/movie-guy" target="_blank" ><img className="projects--p4--img" src="https://i.imgur.com/r3KOuIu.png" alt="movieguy" /></a>
            </div>
            <div className="projects--p2">
                <div className="projects--p2--content">
                    <h1>My Team</h1>
                    <ul>
                        <li>
                            A full-stack web application for users to create or join a soccer team.
                        </li>
                        <li>
                            Developed with JavaScript, Node.js, Express, Bootstrap, MongoDB, Google OAuth. Deployed project in Heroku.
                        </li>
                        <li>
                            Collaborated with designer as a team to complete project.
                        </li>
                    </ul>
                    <div>
                        <a href="https://github.com/wenwenkp/my-team" target="_blank">Open source on GitHub</a>
                        <a href="https://my-soccer-team.herokuapp.com" target="_blank">Launch Site</a>
                    </div>
                </div>
                <a href="https://my-soccer-team.herokuapp.com" target="_blank"><img className="projects--p2--img" src="https://i.imgur.com/yDyOejt.png" alt="movieguy" /></a>
            </div>
            <div className="projects--p1">
                <div className="projects--p1--content">
                    <h1>Black Jack</h1>
                    <ul>
                        <li>
                            Built browser based Black-Jack game.
                        </li>
                        <li>
                            Developed with HTML5, CSS3 and JavaScript.
                        </li>
                        <li>
                            Deployed game in GitHub.
                        </li>
                    </ul>
                    <div>
                        <a href="https://github.com/wenwenkp/black-jack" target="_blank">Open source on GitHub</a>
                        <a href="https://wenwenkp.github.io/black-jack/" target="_blank">Launch Site</a>
                    </div>
                </div>
                <a href="https://wenwenkp.github.io/black-jack/" target="_blank"><img className="projects--p1--img" src="https://i.imgur.com/0nxWzrR.png" alt="movieguy" /></a>
            </div>
        </div>
    )
}

export default Projects;

