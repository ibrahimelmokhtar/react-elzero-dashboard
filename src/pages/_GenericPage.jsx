import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import PageTitle from './../components/PageTitle';

const GenericPage = ({ pageTitle, pageContent }) => {
	return (
		<div className='relative flex bg-red-300'>
			{/* Nav Bar Menu */}
			<NavBar />

			{/* Main Page */}
			<main
				className='min-h-screen w-full flex-1 bg-slate-100 px-8 py-12'
				style={{
					height: '200vh',
				}}
			>
				{/* Main Page Title */}
				<PageTitle title={pageTitle} />

				{/* Main Page Content */}
				{/* {pageContent} */}
				<div className='capitalize'>
					hello from <span className='font-bold underline'>{pageTitle}</span>{' '}
					page
				</div>
			</main>
		</div>
	);
};

// Validate Component Props
GenericPage.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	pageContent: PropTypes.element.isRequired,
};

export default GenericPage;
