import React from 'react';

const Projects = () => {
	const projects = [1, 2, 3];
	return (
		<div id="projects-parent">
			<h1>Projects</h1>
			{projects.map((project, index) => {
				return (
					<div key={index}>
						<h2>Project Title </h2>
						<div className="project-content">
							<div className="project-info">
								<p>Role: </p>
								<p>Tech Stack:</p>
								<p>
									Lorem ipsum dolor amet truffaut mustache viral, vexillologist
									PBR&B hella intelligentsia. Taxidermy put a bird on it
									kickstarter before they sold out cronut vice. Kogi twee
									hashtag, pickled pitchfork fashion axe ugh.
								</p>
							</div>
							<div className="project-image-parent">
								<img src="https://vignette.wikia.nocookie.net/powerlisting/images/1/18/Yin-Yang.png/revision/latest?cb=20121028014051" />
							</div>
						</div>
						<div className="project-links">
							<a href="#">&nbsp;GitHub&nbsp; </a>
							<h3>||</h3>
							<a href="#">App Link</a>
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
