import React from 'react';

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
							<a href="#">Projects</a>
						</li>
						<li className="nav-link">
							<a href="#">Experience</a>
						</li>
						<li className="nav-link">
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default NavBar;
