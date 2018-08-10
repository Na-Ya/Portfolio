import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
	return (
		<header>
			<div id="nav-home">
				<h1 id="name">Nabil Yafai</h1>
			</div>
			<div id="nav-links">
				<nav>
					<ul>
						<li className="nav-link">
							<AnchorLink href="#projects-parent">Projects</AnchorLink>
						</li>
						<li className="nav-link">
							<AnchorLink href="#experience-parent">Experience</AnchorLink>
						</li>
						<li className="nav-link">
							<AnchorLink href="#contact-parent">Contact</AnchorLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default NavBar;
