import React from 'react';
import './css/sb-admin-2.min.css';
import './css/sb-admin-2.css';
import {Dashboard}  from './components/Dashboard';
import {Coupons} from './components/Coupons';
import {Header} from './components/Header';
import { AboutUs} from './components/AboutUs';
import { Ledger } from './components/Ledger';
// import { Menu } from './components/Menu';
import {Forgetpass } from './components/Forgetpass'
import {Footer} from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className='mainContainer'>
        <Header/>
        {/* <Menu/> */}
        
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/coupons" element={<Coupons/>}/>
        <Route path="/ledger" element={<Ledger/>}/>
        <Route path="/forgotpass" element={<Forgetpass/>}/>
        </Routes>
        <Footer/>
        </div>

    </Router>
  );
  }

export default App;
