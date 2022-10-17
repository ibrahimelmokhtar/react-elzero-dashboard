import React from 'react';
import GenericPage from './_GenericPage';

const DashboardPage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>dashboard</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='dashboard' pageContent={pageContent} />;
};

export default DashboardPage;
