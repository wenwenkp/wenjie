import React from 'react';
import resume from '../Resume.pdf';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="first">
				<li>
					<a href="#wenjie">Wenjie</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/li-wenjie/" target="_blank">Linkedin</a>
				</li>
				<li>
					<a href="https://github.com/wenwenkp" target="_blank">GitHub</a>
				</li>
				<li>
					<a href={resume} target="_blank">Resume</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;