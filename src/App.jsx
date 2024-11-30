import { useEffect } from 'react';
import axios from './utils/axios.customize';

function App() {
   useEffect(() => {
      const fetchAPI = async () => {
         const res = await axios.get('/v1/api');
         console.log('check', res);
      };

      fetchAPI();
   }, []);

   return (
      <div className="wrapper">
         <h1>Hello World from React</h1>
      </div>
   );
}

export default App;