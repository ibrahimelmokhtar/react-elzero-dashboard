import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarIcon from './NavBarIcon';

const NavBarItem = ({ icon, title }) => {
	return (
		<li className='mb-2'>
			<NavLink
				end
				to={title === 'dashboard' ? '/' : `/${title.toLowerCase()}`}
				className='group relative flex w-full items-center rounded-lg p-3 transition-colors duration-300 hover:bg-gray-100 md:px-3 md:py-2'
				style={({ isActive }) => ({
					backgroundColor: isActive ? '#f1f5f9' : '',
				})}
			>
				{/* NavBar Icon */}
				<NavBarIcon icon={icon} />

				{/* NavBar Title */}
				<span className='hidden font-semibold capitalize sm:hidden md:block'>
					{title}
				</span>

				{/* Side Tooltip */}
				<div className='absolute top-1/2 -right-2 z-10 translate-x-full -translate-y-1/2 transform rounded-lg border border-black bg-black py-2 px-3 text-sm font-semibold capitalize text-white opacity-0 shadow-sm shadow-slate-400 duration-300 group-hover:opacity-100 md:hidden'>
					{title}
					{/* Tooltip Left Arrow */}
					<span className='absolute top-1/2 left-0 h-0 w-0 -translate-x-full -translate-y-1/2 transform border-8 border-black border-b-transparent border-l-transparent border-t-transparent'></span>
				</div>
			</NavLink>
		</li>
	);
};

// Validate Component Props
NavBarItem.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default NavBarItem;
