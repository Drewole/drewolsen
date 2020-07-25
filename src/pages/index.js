import React from 'react';

import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import BannerImage from '../components/BannerImage';

const IndexPage = () => (
	<Layout>
		<Hero />
		<About />
		<Projects />
		<BannerImage />
		<Footer />
	</Layout>
);

export default IndexPage;
