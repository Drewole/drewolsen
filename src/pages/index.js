import React from 'react';

import Layout from '../layouts/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const IndexPage = () => (
	<Layout>
		<Header />
		<About />
		<Projects />
		<Footer />
	</Layout>
);

export default IndexPage;
