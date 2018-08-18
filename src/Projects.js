import React from 'react';

const Projects = () => {
	const projects = [1, 2, 3];
	return (
		<div id="projects-parent">
			<h1>Projects</h1>
			{projects.map((project, index) => {
				return (
					<div key={index}>
						<h2>RepliCode</h2>
						<div className="project-content">
							<div className="project-info">
								<p>Role: Fullstack Software Engineer</p>
								<p>
									Tech Stack: React, Redux, AWS S3, Docker, Sequelize, Express,
									Web Audio api.
								</p>
								<p>
									Replicode is a content creation platform for creating
									interactive coding tutorials.
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
						{projects.length - 1 === index ? null : (
							<hr className="project-break" />
						)}
					</div>
				);
			})}
		</div>
	);
};
export default Projects;
