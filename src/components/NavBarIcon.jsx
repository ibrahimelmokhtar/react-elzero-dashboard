import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineBarChart, AiOutlineUser } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { FaProjectDiagram } from 'react-icons/fa';
import { HiOutlineUserGroup, HiOutlineCreditCard } from 'react-icons/hi';
import { TbCertificate, TbFiles } from 'react-icons/tb';

const NavBarIcon = ({ icon, iconSize = 24 }) => {
	return (
		<div className='pr-0 md:pr-3'>
			{icon === 'dashboard' && <AiOutlineBarChart size={iconSize} />}
			{icon === 'settings' && <BsGear size={iconSize} />}
			{icon === 'profile' && <AiOutlineUser size={iconSize} />}
			{icon === 'projects' && <FaProjectDiagram size={iconSize} />}
			{icon === 'courses' && <TbCertificate size={iconSize} />}
			{icon === 'friends' && <HiOutlineUserGroup size={iconSize} />}
			{icon === 'files' && <TbFiles size={iconSize} />}
			{icon === 'plans' && <HiOutlineCreditCard size={iconSize} />}
		</div>
	);
};

// Validate Component Props
NavBarIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	iconSize: PropTypes.number,
};

export default NavBarIcon;
