import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addemployee from './components/Addemployee';
import Employeelist from './components/Employeelist';
import Navbar from './components/Navbar';
import Updateemployee from './components/Updateemployee';

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route index  element = { <Employeelist/>}/>
            <Route path="/"  element = {<Employeelist/>} />
            <Route path="/employeelist"  element = {<Employeelist/>}/>
            <Route path="/addemployee"  element = {<Addemployee/>}/>
            <Route path ="/editEmployee/:id" element={<Updateemployee/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
