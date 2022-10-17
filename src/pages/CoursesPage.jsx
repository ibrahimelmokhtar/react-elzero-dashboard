import React from 'react';
import GenericPage from './_GenericPage';

const CoursesPage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>courses</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='courses' pageContent={pageContent} />;
};

export default CoursesPage;
