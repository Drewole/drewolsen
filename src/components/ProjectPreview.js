import React from 'react';
import { FaPlus, FaTag } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Coffee from '../images/portfolio/mnapt-square.jpg';

const ProjectPreview = ({ data }) => (
	<section id="projects">
		<div className="row">
			<h1>Some of My Work.</h1>
			<div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
				<div className="columns portfolio-item">
					<div className="item-wrap">
						<a href="#modal-01" title="">
							<Image fluid={data.allProjectsJson.edges.node.images.square} />
							<img alt="" src={Coffee} />
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
			</div>
		</div>
	</section>
);
export default ProjectPreview;

const data = useStaticQuery(graphql`
	{
		allProjectsJson {
			edges {
				node {
					type
					tags
					slug
					name
					images {
						insidePage
						mobile
						square
						frontPage
					}
					id
					hasSite
					description
				}
			}
		}
	}
`);
