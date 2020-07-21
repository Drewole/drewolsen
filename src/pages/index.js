import React from 'react';

import Layout from '../layouts/Layout';

import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const IndexPage = () => (
	<Layout>
		<About />
		<Projects />
		<Footer />
	</Layout>
);

export default IndexPage;
