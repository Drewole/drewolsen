import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
// import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
// import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import TemplateWrapper from '../layouts/TemplateWrapper';
import ProjectPreview from '../components/ProjectPreview';

const IndexPage = () => (
	<TemplateWrapper>
		<Header />
		<About />
		{/* <Resume /> */}
		<Portfolio />
		{/* <Testimonials /> */}
		<ProjectPreview />
		<Footer />
	</TemplateWrapper>
);

export default IndexPage;
