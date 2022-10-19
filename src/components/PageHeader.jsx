import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import Avatar from './Avatar';

const PageHeader = () => {
	// Control Notifications State
	const [hasNotifications, setHasNotifications] = useState(true);
	const handleNotifications = () => {
		setHasNotifications(false);
	};

	return (
		<header className='sticky top-0 left-0 z-10 flex w-full items-center justify-between bg-white px-4 py-4 shadow-md shadow-slate-400 md:px-6'>
			{/* Search Bar */}
			<div className='flex items-center rounded-xl border border-gray-400 p-1 px-2'>
				{/* Search Icon */}
				<label htmlFor='search'>
					<BsSearch size='14' className='cursor-pointer text-gray-500' />
				</label>

				{/* Search Input Field */}
				<input
					type='search'
					name='search'
					id='search'
					placeholder='type a keyword'
					className='w-40 flex-1 pl-2 text-sm capitalize transition-width duration-300 placeholder:text-gray-500 placeholder:transition-opacity focus:w-52 focus:outline-none focus:placeholder:opacity-0'
				/>
			</div>

			{/* Notifications And Avatar */}
			<div className='flex items-center'>
				{/* Notification Container */}
				<div
					className='relative mr-3 cursor-pointer'
					onClick={handleNotifications}
				>
					<FaRegBell
						size='20'
						className='text-gray-400 transition-colors duration-300 hover:text-gray-600'
					/>

					{/* Active Notification Indicator */}
					{hasNotifications && (
						<span className='absolute top-0 right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-600'></span>
					)}
				</div>

				{/* Avatar Thumbnail */}
				<div className='cursor-pointer'>
					<Avatar src={require('../images/account-avatar.png')} size={30} />
				</div>
			</div>
		</header>
	);
};

export default PageHeader;
