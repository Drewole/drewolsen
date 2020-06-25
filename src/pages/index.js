import React from 'react';

import '../scss/main.scss';
import '../js/main.js';

import Header from '../components/Header';
import About from '../components/About';
// import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Projects from '../components/ProjectPreview';
// import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ProjectPreview from '../components/ProjectPreview';

const IndexPage = () => (
	<div>
		<Header />
		<About />
		{/* <Resume /> */}
		<Portfolio />
		{/* <Testimonials /> */}
		<ProjectPreview />
		<Footer />
	</div>
);

export default IndexPage;
