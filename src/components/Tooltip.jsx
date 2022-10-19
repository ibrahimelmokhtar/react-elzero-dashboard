import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ content, bgColor, textColor, shadowColor, position }) => {
	// Set tooltip position
	let tooltipStyle = '';
	switch (position) {
		case 'top':
			tooltipStyle = '-top-2 right-1/2 translate-x-1/2 -translate-y-full';
			break;
		case 'right':
			tooltipStyle = 'top-1/2 -right-2 translate-x-full -translate-y-1/2';
			break;
		case 'bottom':
			tooltipStyle = '-bottom-2 right-1/2 translate-x-1/2 translate-y-full';
			break;
		case 'left':
			tooltipStyle = 'top-1/2 -left-2 -translate-x-full -translate-y-1/2';
			break;
		default:
			break;
	}

	// Set arrow position
	let arrowStyle = '';
	switch (position) {
		case 'top':
			arrowStyle =
				'bottom-0 right-1/2 translate-x-1/2 translate-y-full border-b-transparent border-r-transparent border-l-transparent';
			break;
		case 'right':
			arrowStyle =
				'top-1/2 left-0 -translate-x-full -translate-y-1/2 border-b-transparent border-l-transparent border-t-transparent';
			break;
		case 'bottom':
			arrowStyle =
				'top-0 right-1/2 translate-x-1/2 -translate-y-full border-t-transparent border-r-transparent border-l-transparent';
			break;
		case 'left':
			arrowStyle =
				'top-1/2 right-0 translate-x-full -translate-y-1/2 border-b-transparent border-r-transparent border-t-transparent';
			break;
		default:
			break;
	}

	return (
		<div
			className={`absolute ${tooltipStyle} z-10 transform whitespace-nowrap rounded-lg border border-${bgColor} bg-${bgColor} py-2 px-3 text-sm font-semibold capitalize text-${textColor} opacity-0 shadow-sm shadow-${shadowColor} duration-300 group-hover:opacity-100`}
		>
			{/* Tooltip Content */}
			{content}

			{/* Tooltip Arrow */}
			<span
				className={`absolute ${arrowStyle} h-0 w-0 transform border-8 border-${bgColor}`}
			></span>
		</div>
	);
};

// Validate Component Props
Tooltip.propTypes = {
	content: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
	shadowColor: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
};

export default Tooltip;
