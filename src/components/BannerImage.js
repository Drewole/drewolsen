import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = () => (
	<StaticQuery
		query={graphql`
			{
				allFile(filter: { relativePath: { eq: "pineTreesBkg.jpg" } }) {
					edges {
						node {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			// Set ImageData.
			const imageData = data;
			return (
				<BackgroundImage Tag="section" className="headerBkg" fluid={imageData} backgroundColor={`#040e18`}>
					<h2>gatsby-background-image</h2>
				</BackgroundImage>
			);
		}}
	/>
);

export default BackgroundSection;
