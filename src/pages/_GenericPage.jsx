import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const GenericPage = ({ pageContent }) => {
	return (
		<div className='relative flex bg-red-300'>
			{/* Nav Bar Menu */}
			<NavBar />

			{/* Main Page Content */}
			<main
				className='min-h-screen w-full flex-1 bg-slate-100 px-8 py-12'
				style={{
					height: '200vh',
				}}
			>
				{pageContent}
			</main>
		</div>
	);
};

// Validate Component Props
GenericPage.propTypes = {
	pageContent: PropTypes.element.isRequired,
};

export default GenericPage;
