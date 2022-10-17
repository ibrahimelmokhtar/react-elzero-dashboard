import React from 'react';
import GenericPage from './_GenericPage';

const SettingsPage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>settings</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='settings' pageContent={pageContent} />;
};

export default SettingsPage;
