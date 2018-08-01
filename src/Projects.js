import React from 'react';

const Projects = () => {
	const projects = [1, 2, 3];
	return (
		<div id="projects-parent">
			<h1>Projects</h1>

			{projects.map(projects => {
				return (
					<div>
						<h3>Project Title </h3>
						<p>
							Lorem ipsum dolor amet truffaut mustache viral, vexillologist
							PBR&B hella intelligentsia. Taxidermy put a bird on it kickstarter
							before they sold out cronut vice. Kogi twee hashtag, pickled
							pitchfork fashion axe ugh. Kickstarter brunch vinyl shabby chic
							tacos, williamsburg food truck try-hard sustainable bushwick
							cronut umami PBR&B wayfarers trust fund.
						</p>
						<div class="project-image-parent">
							<img src="https://vignette.wikia.nocookie.net/powerlisting/images/1/18/Yin-Yang.png/revision/latest?cb=20121028014051" />
						</div>
						<div class="project-links">
							<a href="#">LINK to PROJECT</a>
							<a href="#">LINK to PROJECT</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default Projects;
