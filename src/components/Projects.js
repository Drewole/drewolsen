import React from 'react';

import Project from './Project';

const Projects = () => (
	<section id="portfolio">
		<div className="row">
			<div className="twelve columns collapsed">
				<h1>Some of My Work.</h1>
				<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
					<Project />
				</div>
			</div>
		</div>
	</section>
);
export default Projects;
