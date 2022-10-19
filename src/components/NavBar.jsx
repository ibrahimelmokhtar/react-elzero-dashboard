import React from 'react';
import NavBarItem from './NavBarItem';
import { Link } from 'react-router-dom';

const NavBar = () => {
	// Available NavBar Items
	const items = [
		'dashboard',
		'settings',
		'profile',
		'projects',
		'courses',
		'friends',
		'files',
		'plans',
	];

	// Main Logo
	const dashboardLogoText = 'elzero';

	return (
		<aside className='sticky top-0 left-0 z-20 flex h-screen w-fit flex-col items-center justify-center bg-white px-4 py-2 shadow-lg shadow-slate-400 md:w-64 md:justify-start'>
			{/* Dashboard Main Logo */}
			<div className='relative'>
				<Link to='/'>
					<h2 className='hidden border-b-0 border-black px-4 py-4 text-center uppercase md:inline-block md:border-b-4 md:text-2xl md:font-extrabold'>
						{dashboardLogoText}
					</h2>
				</Link>

				{/* Circular Shape Under The Main Logo */}
				<span className='absolute bottom-0.5 left-1/2 -translate-x-1/2 translate-y-1/2 transform rounded-full border-4 border-white bg-black md:h-5 md:w-5'></span>
			</div>

			{/* Available Dashboard Sections */}
			<ul className='mt-0 w-full md:mt-8'>
				{items.map((item, index) => (
					<NavBarItem key={index + 1} icon={item} title={item} />
				))}
			</ul>
		</aside>
	);
};

export default NavBar;
