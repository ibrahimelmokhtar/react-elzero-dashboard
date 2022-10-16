import React from 'react';
import GenericPage from './_GenericPage';

const DashboardPage = () => {
	const pageContent = (
		<div>
			<h2>Dashboard Page</h2>
		</div>
	);

	return <GenericPage pageContent={pageContent} />;
};

export default DashboardPage;
