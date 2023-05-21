
import Header from './componnets/Header';
import Home from './componnets/Home';
import './styles/App.scss'

import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div>
     
      
       <Header />

         <Routes>

         <Route path="*" element={<Home/>} />
    <Route path="*" element={<div> Page Not Found </div>} />
     </Routes> 
       
 
    </div>
  );
}

export default App;
