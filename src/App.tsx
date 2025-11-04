import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Join from './components/Join';
import CreateSetting from './components/CreateSetting';
import CreateMap from './components/CreateMap';
import BlockList from './components/BlockList';
import ChangeMap from './components/ChangeMap';
import Game from './components/Game';
import Instruction from './components/Instruction';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Join/>} />
          <Route path="/create" element={ <CreateMap/> }/>
          <Route path="/listOfBloks" element={ <BlockList /> } />
          <Route path='/map/' element={ <Game /> } />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/change" element={<ChangeMap />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
