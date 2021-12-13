import React from 'react';
import './css/sb-admin-2.min.css';
import {Dashboard}  from './components/Dashboard';
import {Coupons} from './components/Coupons';
import {Header} from './components/Header';
import { AboutUs} from './components/AboutUs';
import { Menu } from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="mainContainer">
        <Header/>
        <Menu/>
        <Routes>
        <Route path="/welcome" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/coupons" element={<Coupons/>}/>
        </Routes>
        </div>

    </Router>
  );
}
const Home = () =>{
<div>
  <h1>HomePage</h1>
</div>
}; 

export default App;
