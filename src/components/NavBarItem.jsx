import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarIcon from './NavBarIcon';
import Tooltip from './Tooltip';

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
				<span className='hidden font-semibold capitalize md:block'>
					{title}
				</span>

				{/* Side Tooltip */}
				<div className='block md:hidden'>
					<Tooltip
						content={title}
						bgColor='black'
						textColor='white'
						shadowColor='slate-400'
						position='right' // will be on the right of the parent component
					/>
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
