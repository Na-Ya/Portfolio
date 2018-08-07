import React from 'react';

const Experience = () => {
	const experiences = [1, 2, 3];
	return (
		<div id="experience-parent">
			<h1>Experience</h1>
			<h4 style={{ marginTop: 0, color: 'black' }}>Tap for details</h4>
			{experiences.map((experience, index) => {
				return (
					<div
						key={index}
						className="flip-container"
						onClick={e => {
							e.preventDefault();
							e.currentTarget.classList.toggle('flip');
							let frontHeight =
								e.currentTarget.children[0].children[0].offsetHeight;
							let backHeight =
								e.currentTarget.children[0].children[1].offsetHeight;
							if (frontHeight > backHeight) {
								e.currentTarget.children[0].children[1].style.height =
									frontHeight + 'px';
							} else {
								e.currentTarget.children[0].children[0].style.height =
									backHeight + 'px';
							}
							// e.currentTarget.children[0].children[0].style.height = '20px';
							console.log(
								'front',
								e.currentTarget.children[0].children[0].offsetHeight,
								'back',
								e.currentTarget.children[0].children[1].offsetHeight
							);
						}}
					>
						<div className="flipper">
							<div className="job-parent front">
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
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">This is a job title</h3>
									<ul>
										<li>Keytar bitters slow-carb authentic cliche.</li>{' '}
										<li>
											Fam brunch meh, gluten-free vaporware etsy pok pok green
											juice retro craft beer.
										</li>
										<li>
											Unicorn ennui leggings skateboard pinterest. Mlkshk cred
											synth actually.
										</li>
									</ul>
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
