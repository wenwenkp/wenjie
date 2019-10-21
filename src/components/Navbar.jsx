import React from 'react';

class Navbar extends React.Component {
	state = {
		isChecked: false,
	}

	render() {
		return (
			<nav className="navbar">
				<ul className="first">
					{/* <input type="checkbox" id="navbar--toggle" />
					<label htmlFor="navbar--toggle" className="navbar--button">
						<span className="navbar--icon">Menu</span>
					</label> */}
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
						<a href="#">Resume</a>
					</li>
				</ul>

				{/* <ul className="second">
					<input type="checkbox" id="navbar--toggle" />
					<label htmlFor="navbar--toggle" className="navbar--button">
						<span className="navbar--icon">Menu</span>
					</label>
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
						<a href="#">Resume</a>
					</li>
				</ul> */}
			</nav>
		)
	}
}


export default Navbar;