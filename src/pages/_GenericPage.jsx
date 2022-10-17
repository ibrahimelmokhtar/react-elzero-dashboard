import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import PageTitle from './../components/PageTitle';

const GenericPage = ({ pageTitle, pageContent }) => {
	return (
		<div className='relative flex bg-red-300'>
			{/* Nav Bar Menu */}
			<NavBar />

			{/* Main Page */}
			<main
				className='relative min-h-screen w-full flex-1 bg-slate-100'
				style={{
					minHeight: '200vh',
				}}
			>
				{/* Main Header */}
				<PageHeader />

				{/* Main Page Content */}
				<div className='px-4 py-8 capitalize md:px-6'>
					{/* Main Page Title */}
					<PageTitle title={pageTitle} />

					{pageContent}
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
