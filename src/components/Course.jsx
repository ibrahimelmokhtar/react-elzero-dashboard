import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { BiDollar } from 'react-icons/bi';
import Avatar from './Avatar';
import Tooltip from './Tooltip';

const Course = ({ course }) => {
	return (
		<li>
			<article className='group relative z-0 overflow-hidden rounded-xl bg-white'>
				{/* Course Preview */}
				<div className='relative flex items-center justify-center bg-red-200'>
					<img
						src={require(`../images/${course.preview}`)}
						alt='Course Preview'
						width='400'
						height='300'
						className='w-full brightness-90 transition duration-300'
					/>
					<div className='absolute top-6 right-6 cursor-pointer'>
						<Avatar
							src={require(`../images/${course.instructor.image}`)}
							size={70}
						/>

						{/* Side Tooltip */}
						<Tooltip
							content={course.instructor.name}
							bgColor='gray-200'
							textColor='black'
							shadowColor='slate-400'
							position='left' // will be on the left of the parent component
						/>
					</div>
				</div>

				{/* Course Details */}
				<div className='px-4 py-3'>
					<h2 className='my-2 text-lg font-bold capitalize'>{course.title}</h2>
					<p className='text-base font-normal capitalize leading-6 text-gray-700'>
						{course.description}.
					</p>
				</div>

				{/* View Course Info Button */}
				<div className='-mb-3 flex items-center'>
					<span className='h-px flex-1 bg-gray-200'></span>
					<span className='cursor-pointer rounded-lg bg-blue-600 py-1 px-2 text-base font-medium capitalize text-white transition-colors duration-300 hover:bg-blue-800'>
						Course Info
					</span>
					<span className='h-px flex-1 bg-gray-200'></span>
				</div>

				{/* Course Icons */}
				<div className='flex items-center justify-between py-4 px-4 font-semibold text-gray-500'>
					{/* Attendees Count */}
					<div className='flex items-center'>
						<HiOutlineUsers size={20} className='mr-1' />
						<span>{course.attendees}</span>
					</div>

					{/* Course Price */}
					<div className='flex items-center'>
						<BiDollar size={20} className='mr-1' />
						<span>{course.price}</span>
					</div>
				</div>
			</article>
		</li>
	);
};

export default Course;
