import React from 'react';

const Projects = () => {
	const projects = [1, 2, 3];
	return (
		<div id="projects-parent">
			<h1>Projects</h1>
			<div>
				<h2>RepliCode</h2>
				<div className="project-content">
					<div className="project-info">
						<p>Role: Fullstack Software Engineer</p>
						<p>
							Tech Stack: React, Redux, AWS S3, Docker, Sequelize, Express, Web
							Audio api.
						</p>
						<p>
							Replicode is a content creation platform for creating interactive
							coding tutorials.
						</p>
					</div>
					<div className="project-image-parent">
						<img src="https://i.imgur.com/LApgIyP.gif" />
					</div>
				</div>
				<div className="project-links">
					<a href="https://github.com/RepliCode/RepliCode">
						&nbsp;GitHub&nbsp;{' '}
					</a>
					<h3>||</h3>
					<a href="https://replicode.herokuapp.com/">App Link</a>
				</div>
				<hr className="project-break" />
			</div>
			<div>
				<h2>cycleTracker</h2>
				<div className="project-content">
					<div className="project-info">
						<p>Role: Fullstack Software Engineer</p>
						<p>
							Tech Stack: Built with JavaScript, D3.js, Mapbox api, and Express.
						</p>
						<p>
							cycleTracker is a data visualization/simulation of Citi bike rides
							over the course of a day in NYC.
						</p>
					</div>
					<div className="project-image-parent">
						<img src="https://i.imgur.com/c1CqMfH.png" />
					</div>
				</div>
				<div className="project-links">
					<a href="https://github.com/cycleTracker/cycleTracker">
						&nbsp;GitHub&nbsp;{' '}
					</a>
					<h3>||</h3>
					<a
						href="https://citicycletracker.herokuapp.com/
"
					>
						App Link
					</a>
				</div>
			</div>
		</div>
	);
};
export default Projects;
