import React from 'react';
import GenericPage from './_GenericPage';

const PlansPage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>plans</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='plans' pageContent={pageContent} />;
};

export default PlansPage;
