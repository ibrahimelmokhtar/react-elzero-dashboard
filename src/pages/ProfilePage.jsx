import React from 'react';
import GenericPage from './_GenericPage';

const ProfilePage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>profile</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='profile' pageContent={pageContent} />;
};

export default ProfilePage;
