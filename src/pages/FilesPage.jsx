import React from 'react';
import GenericPage from './_GenericPage';

const FilesPage = () => {
	const pageContent = (
		<div>
			<span>hello from </span>
			<span className='font-bold capitalize underline'>files</span>
			<span> page</span>
		</div>
	);

	return <GenericPage pageTitle='files' pageContent={pageContent} />;
};

export default FilesPage;
