import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
	return (
		<div className='mb-8'>
			<h1 className='pb-4 text-3xl font-extrabold capitalize md:text-4xl'>
				{title}
			</h1>

			{/* Bottom Line */}
			<div className='flex h-1 w-32 items-center'>
				<span className='h-full w-1/3 bg-black'></span>
				<span className='h-full flex-1 bg-white'></span>
			</div>
		</div>
	);
};

// Validate Component Props
PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageTitle;
