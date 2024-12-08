import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home';
import UsersPage from './pages/Users';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';

function App() {
   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UsersPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
         </Routes>
      </div>
   );
}

export default App;