import React from 'react';
import GenericPage from './_GenericPage';

const ProjectsPage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>projects</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='projects' pageContent={pageContent} />;
};

export default ProjectsPage;
