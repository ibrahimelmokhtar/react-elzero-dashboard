import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
	return (
		<div className='relative mb-8 w-32'>
			<h1 className='border-b-4 border-b-white pb-4 pr-4 text-3xl font-extrabold capitalize md:text-4xl'>
				{title}
			</h1>

			{/* Bottom Line */}
			<span className='absolute left-0 bottom-0 h-1 w-1/3 bg-black'></span>
		</div>
	);
};

// Validate Component Props
PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageTitle;
