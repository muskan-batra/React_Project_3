
import Header from './componnets/Header';
import Home from './componnets/Home';
import Footer from './componnets/Footer';
import './styles/App.scss'
import './styles/mediaquery.scss';

import {Routes , Route} from 'react-router-dom'
import Contact from './componnets/Contact';
import Services from './componnets/Services';

function App() {
  return (
    <div>
     
      
       <Header />

         <Routes>

         <Route path="/" element={<Home/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/services" element={<Services/>} />
    <Route path="*" element={<div> Page Not Found </div>} />
     </Routes> 
   <Footer/>
       
 
    </div>
  );
}

export default App;
