import { FaUserSecret } from 'react-icons/fa';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<div className='h-full p-8'>
						<FaUserSecret size='30' />
						<h1 className='py-3 text-3xl font-bold underline'>Hello world!</h1>
					</div>
				}
			/>
		</Routes>
	);
}

export default App;
