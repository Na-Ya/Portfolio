import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

const NavBar = () => {
	const offset = document.documentElement.clientHeight * 0.2;
	return (
		<header>
			<div id="nav-home">
				<h1 id="name">Nabil Yafai</h1>
			</div>
			<div id="nav-links">
				<nav>
					{/* <ul>
						<li className="nav-link">
							<AnchorLink href="#projects-parent">Projects</AnchorLink>
						</li>
						<li className="nav-link">
							<AnchorLink href="#experience-parent">Experience</AnchorLink>
						</li>
						<li className="nav-link">
							<AnchorLink href="#contact-parent">Contact</AnchorLink>
						</li>
					</ul> */}
					<Scrollspy
						items={['projects-parent', 'experience-parent', 'contact-parent']}
						currentClassName="is-current"
						offset={-offset}
					>
						<li className="nav-link">
							<AnchorLink href="#projects-parent" offset={offset}>
								Projects
							</AnchorLink>
						</li>
						<li className="nav-link">
							<AnchorLink href="#experience-parent" offset={offset}>
								Experience
							</AnchorLink>
						</li>
						<li className="nav-link">
							<AnchorLink href="#contact-parent" offset={offset}>
								Contact
							</AnchorLink>
						</li>
					</Scrollspy>
				</nav>
			</div>
		</header>
	);
};
export default NavBar;
