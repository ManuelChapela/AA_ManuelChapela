import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/app.scss';

import './pages/WelcomePage'
import WelcomePage from './pages/WelcomePage';
import AccessPage from './pages/AccessPage';
import PrivatePage from './pages/PrivatePage';
import HomePage from './pages/HomePage';
import SwitchPage from './pages/SwitchPage';


function App() {
  return (

    <BrowserRouter>
      <Routes>
            <Route exact={true} path='/' element={ <SwitchPage/>} />
            <Route exact={true} path='/signin' element={ <WelcomePage/>} />
            <Route exact={true} path='/acceder' element={ <AccessPage/>} />
            <Route exact={true} path='/home' element={ <HomePage/>} />
            <Route exact={true} path='/private' element={ <PrivatePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
