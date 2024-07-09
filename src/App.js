import Homepage from './pages/Homepage';
import './App.css';
import {BrowserRouter, Routes,Route, NavLink,useParams} from 'react-router-dom'
import Modal from './components/Modal';
import axios from 'axios';
function App() {  
  return (
    
    <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<Homepage/>}/>
        
     
        </Routes>   
    </BrowserRouter>
      
    
  );
}

export default App;
