import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home';
import UserPage from './pages/User';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';

function App() {
   return (
      <div className="wrapper">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
         </Routes>
      </div>
   );
}

export default App;