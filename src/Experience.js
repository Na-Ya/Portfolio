import React from 'react';

const Experience = () => {
	const projects = [1, 2, 3];
	return (
		<div id="experience-parent">
			<h1>Experience</h1>
			{projects.map((project, index) => {
				return (
					<div key={index}>
						<h3>Job Title </h3>
						<p>
							Lorem ipsum dolor amet truffaut mustache viral, vexillologist
							PBR&B hella intelligentsia. Taxidermy put a bird on it kickstarter
							before they sold out cronut vice. Kogi twee hashtag, pickled
							pitchfork fashion axe ugh. Kickstarter brunch vinyl shabby chic
							tacos, williamsburg food truck try-hard sustainable bushwick
							cronut umami PBR&B wayfarers trust fund.
						</p>
						<div className="project-image-parent">
							<img src="https://vignette.wikia.nocookie.net/powerlisting/images/1/18/Yin-Yang.png/revision/latest?cb=20121028014051" />
						</div>
						<div className="project-links">
							<a href="#">LINK to PROJECT</a>
							<a href="#">LINK to PROJECT</a>
						</div>
						{projects.length - 1 === index ? null : (
							<hr className="experience-break" />
						)}
					</div>
				);
			})}
		</div>
	);
};
export default Experience;
