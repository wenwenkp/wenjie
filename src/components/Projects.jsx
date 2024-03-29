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
                            Set up user login with token.
                        </li>
                        <li>
                            Mobile friendly responsive web application.
                        </li>
                        <li>
                            Reused components for different routes.
                        </li>
                        <li>
                            Implemented animations in different components to make user control become more live.
                        </li>
                        <li>
                            A MERN-stack web application, developed with JavaScript, MongoDB, Express, React and Node, Sass. Deployed project in Heroku.
                        </li>
                    </ul>
                    <div>
                        <a href="https://github.com/wenwenkp/movie-guy" target="_blank" >Open source on GitHub</a>
                        <a href="https://movieguy.herokuapp.com/" target="_blank" >Launch Site</a>
                    </div>
                </div>
                <a href="https://github.com/wenwenkp/movie-guy" target="_blank" ><img className="projects--p4--img" src="https://i.imgur.com/r3KOuIu.png" alt="movieguy" /></a>
            </div>
            <div className="projects--p3">
                <div className="projects--p3--content">
                    <h1>Tasty</h1>
                    <ul>
                        <li>
                            Developed web application within a 3-members development team for restaurant owners to create their own online menus and for customers to explore.
                        </li>
                        <li>
                            Set up API for database for classmates to use as a third-party API in their projects.
                        </li>
                        <li>
                            Set up photo upload using Amazon S3.
                        </li>
                        <li>
                            Participated in building the backend mainly, GoogleMap API, AmazonS3 set up, users authentication.
                        </li>
                        <li>
                            A full-stack full-CRUD web application, developed with Python3, Django, PostgreSQL, AmazonS3.
                        </li>
                        <li>
                            Responsive mobile friendly.
                        </li>
                    </ul>
                    <div>
                        <a href="https://github.com/wenwenkp/Tasty" target="_blank">Open source on GitHub</a>
                        <a href="https://menunav.herokuapp.com/" target="_blank">Launch Site</a>
                    </div>
                </div>
                <a href="http://menunav.herokuapp.com/" target="_blank"><img className="projects--p2--img" src="https://i.imgur.com/QAE7ger.png" alt="movieguy" /></a>
            </div>
            <div className="projects--p2">
                <div className="projects--p2--content">
                    <h1>My Team</h1>
                    <ul>
                        <li>
                            A full-stack full-CRUD web application for users to create or join a soccer team.
                        </li>
                        <li>
                            Set up Google Account Login.
                        </li>
                        <li>
                            Collaborated with designer as a team to complete project.
                        </li>
                        <li>
                            Developed with JavaScript, Node.js, Express, Bootstrap, MongoDB, Google OAuth.
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

