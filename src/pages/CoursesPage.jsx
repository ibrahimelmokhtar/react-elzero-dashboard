import React from 'react';
import GenericPage from './_GenericPage';
import courses from './../data/courses.json';
import Course from './../components/Course';

const CoursesPage = () => {
	const pageContent = (
		<div className='inline-block'>
			<ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
				{courses.map((course, index) => (
					<Course key={index + 1} course={course} />
				))}
			</ul>
		</div>
	);

	return <GenericPage pageTitle='courses' pageContent={pageContent} />;
};

export default CoursesPage;
