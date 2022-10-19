import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
	src,
	size,
	isRounded = true,
	borderColor = 'border-white',
}) => {
	return (
		<div
			className={`${
				isRounded ? 'rounded-full' : ''
			} flex items-center justify-center overflow-hidden border-2 ${borderColor}`}
		>
			<img src={src} alt='Avatar Thumbnail' width={size} height={size} />
		</div>
	);
};

// Validate Component Props
Avatar.propTypes = {
	src: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	isRounded: PropTypes.bool,
	borderColor: PropTypes.string,
};

export default Avatar;
