import React from 'react';
import GenericPage from './_GenericPage';

const FriendsPage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>friends</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='friends' pageContent={pageContent} />;
};

export default FriendsPage;
