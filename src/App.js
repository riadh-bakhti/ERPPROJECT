import Home from './components/Home/Home';
import React from 'react';
import Login from './components/Login/Login';
import Acceuil from './components/Acceuil/Acceuil';
import Platform from './components/Platform/Platform';
import { Routes,Route } from "react-router-dom";
import ClientDetails from './components/Modules/Contacts/ClientDetails';








function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Login'  element={<Login/>} />
        <Route path='/Acceuil' element={<Acceuil/>} />
        <Route path={`/platform/:module`} element={<Platform/>} />
        <Route path={`/client/:idclient`} element={<ClientDetails />}/>
        
        
        
      </Routes>
      
       
       
       

    </div>
  );
}

export default App;
