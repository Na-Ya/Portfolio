import React from 'react';

const Experience = () => {
	const experiences = [1, 2, 3];
	return (
		<div id="experience-parent">
			<h1>Experience</h1>
			<h4 style={{ marginTop: 0, color: 'black' }}>Tap for details</h4>
			{experiences.map((experience, index) => {
				return (
					<div key={index} className="scene">
						<div
							className="card"
							onClick={e => {
								e.preventDefault();
								e.currentTarget.classList.toggle('is-flipped');
							}}
						>
							<div className="job-parent card__face card__face--front">
								<div className="job-icon-parent">
									<img
										id="job-icon"
										src="https://vignette.wikia.nocookie.net/powerlisting/images/1/18/Yin-Yang.png/revision/latest?cb=20121028014051"
									/>
								</div>
								<div className="job-info-parent">
									<h3 id="job-title">This is a job title</h3>
									<p>Company Name</p>
									<p>11-11-1111 - 11-11-1111</p>
									<p>
										Migas pitchfork banh mi master cleanse ugh. Salvia venmo
										palo santo raclette messenger bag franzen normcore jianbing.{' '}
									</p>
								</div>
							</div>
							<div className="job-parent card__face card__face--back">
								<div className="job-icon-parent">
									<img
										id="job-icon"
										src="https://vignette.wikia.nocookie.net/powerlisting/images/1/18/Yin-Yang.png/revision/latest?cb=20121028014051"
									/>
								</div>
								<div className="job-info-parent">
									<h3 id="job-title">This is a job title</h3>
									<p>Company Name</p>
									<p>11-11-1111 - 11-11-1111</p>
									<p>
										BackBackBackBackBackBackBackBackBackBackBackBackBackBackBackBackBackBackBack{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default Experience;
