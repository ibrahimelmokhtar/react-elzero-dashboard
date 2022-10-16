import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';
import CoursesPage from './pages/CoursesPage';
import FriendsPage from './pages/FriendsPage';
import FilesPage from './pages/FilesPage';
import PlansPage from './pages/PlansPage';
import SettingsPage from './pages/SettingsPage';

function App() {
	return (
		<div>
			<Routes>
				<Route exact path='/' element={<DashboardPage />} />
				<Route exact path='/settings' element={<SettingsPage />} />
				<Route exact path='/profile' element={<ProfilePage />} />
				<Route exact path='/projects' element={<ProjectsPage />} />
				<Route exact path='/courses' element={<CoursesPage />} />
				<Route exact path='/friends' element={<FriendsPage />} />
				<Route exact path='/files' element={<FilesPage />} />
				<Route exact path='/plans' element={<PlansPage />} />
			</Routes>
		</div>
	);
}

export default App;
