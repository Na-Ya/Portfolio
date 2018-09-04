import React from 'react';
import profile from './images/profile.png';
const About = () => {
	return (
		<div id="about-parent">
			<div
				className="about-avatar"
				style={{
					backgroundImage: `url(${profile})`
				}}
				alt="Profile image"
				aria-label="Profile image"
			/>
			<div className="about-content">
				<p>
					Hi, I’m Nabil and I’m a fullstack software engineer with experience in
					HTML, CSS, JavaScript, React.js, Redux, Node.js, and Express.js. I’m
					currently looking for opportunities at a value driven company that is
					passionate about their product.{' '}
				</p>{' '}
				<p>
					{' '}
					I love to solve problems and am looking forward to being a part of an
					engineering team that fosters learning and growth. When I’m not coding
					I enjoy hiking, biking, and cooking. You’ll often find me tinkering in
					the kitchen making sauces and sodas.
				</p>
			</div>
		</div>
	);
};
export default About;
