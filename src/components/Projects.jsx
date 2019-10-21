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
                    <a href="#">Open source on GitHub</a>
                    <a href="#">Launch Site</a>
                </div>
                <img className="projects--p4--img" src="https://i.imgur.com/r3KOuIu.png" alt="movieguy" />
            </div>

            <div className="projects--p3">
                <div className="projects--p3--content">
                    <h1>Tasty</h1>
                    <ul>
                        <li>
                            Developed web application within a 3-members development team for restaurant owners to create their own online menus and for customers to explore.
                        </li>
                        <li>
                            Set up API for classmates’ to use as a database in their projects.
                        </li>
                        <li>
                            Participated in building the backend mainly, models set up, search function, GoogleMap API, AmazonS3 set up, users authentication.
                        </li>
                        <li>
                            A full-stack web application, developed with Python3, Django, PostgreSQL, AmazonS3, GoogleMap API. Deployed project in Heroku.
                        </li>
                    </ul>
                    <a href="#">Open source on GitHub</a>
                    <a href="#">Launch Site</a>
                </div>
                <img className="projects--p3--img" src="https://i.imgur.com/tIvrzSq.png" alt="movieguy" />
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
                    <a href="#">Open source on GitHub</a>
                    <a href="#">Launch Site</a>
                </div>
                <img className="projects--p2--img" src="https://i.imgur.com/yDyOejt.png" alt="movieguy" />
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
                    <a href="#">Open source on GitHub</a>
                    <a href="#">Launch Site</a>
                </div>
                <img className="projects--p1--img" src="https://i.imgur.com/0nxWzrR.png" alt="movieguy" />
            </div>

        </div>
    )
}

export default Projects;

