import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AuthWrapper } from './components/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <AuthWrapper>
         <App />
      </AuthWrapper>
   </BrowserRouter>
);



