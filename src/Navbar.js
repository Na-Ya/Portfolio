import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

const NavBar = () => {
	const offset = document.documentElement.clientHeight * 0.1;
	console.log('offset', offset);
	window.addEventListener('scroll', function(e) {
		console.log('window scroll', window.scrollY);
		if (window.scrollY > offset) {
			let navlinks = document.getElementById('nav-links');

			navlinks.classList.add('newfixed');
		} else if (window.scrollY < offset) {
			let navlinks = document.getElementById('nav-links');
			navlinks.classList.remove('newfixed');
		}
	});

	return (
		<header>
			<div id="nav-home">
				<h1 id="name" className="pop">
					Nabil Yafai
				</h1>
			</div>
			<div id="nav-links">
				<nav>
					<Scrollspy
						items={[
							'about-parent',
							'projects-parent',
							'experience-parent',
							'contact-parent'
						]}
						currentClassName="is-current"
						offset={-offset - 1}
					>
						<li className="nav-link">
							<AnchorLink href="#about-parent" offset={offset}>
								About
							</AnchorLink>
						</li>
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
