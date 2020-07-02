import React from 'react';
import { FaPlus, FaTag } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const Project = () => {
	const data = useStaticQuery(graphql`
		{
			allProjectsJson {
				edges {
					node {
						type
						tags
						slug
						name
						id
						hasSite
						description
						images {
							frontPage {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid
									}
								}
							}
							square {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	return (
		<div className="columns portfolio-item">
			<div className="item-wrap">
				<a href="#modal-01" title="">
					<img alt="" src="" />
					<div className="overlay">
						<div className="portfolio-item-meta">
							<h5>MNAPT</h5>
							<p>Web Design, Web Development</p>
						</div>
					</div>
					<div className="link-icon">
						<FaPlus />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Project;
