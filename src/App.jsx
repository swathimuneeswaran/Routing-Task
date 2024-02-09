import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import All from './components/All';
import Fullstack from './components/Fullstack';
import Data from './components/Data'; 
import Cyber from './components/Cyber'; 
import Career from './components/Career'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/fullstack' element={<Fullstack />} />
        <Route path='/datascience' element={<Data />} />
        <Route path='/cybersecurity' element={<Cyber />} />
        <Route path='/career' element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;


