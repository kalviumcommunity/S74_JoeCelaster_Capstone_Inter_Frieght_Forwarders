import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Body from './components/Body'
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Account from './components/Account';
import Shipment from './components/Shipment';
const App = () => {
    return (
        <div>
            <Router>
                <Routes>

                    <Route path='/' element={<Home/>}/> 
                    <Route path='/about' element={<About/>}/>
                    <Route path='/whatwedo' element={<Body/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/account' element={<Account/>}/>
                    <Route path='/shipment' element={<Shipment/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
