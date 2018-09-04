import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

const NavBar = () => {
	const offsetHeader = document.documentElement.clientHeight * 0.1;
	const offset = document.documentElement.clientHeight * 0.1;

	window.addEventListener('scroll', function(e) {
		if (window.scrollY > offsetHeader) {
			let navlinks = document.getElementById('nav-links');
			console.log(navlinks.offsetHeight);

			navlinks.classList.add('newfixed');
		} else if (window.scrollY < offsetHeader) {
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
						offset={-offset}
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
