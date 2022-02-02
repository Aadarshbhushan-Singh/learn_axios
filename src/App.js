import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar';
import { StudentsDetailsTable } from './Components/Table/StudentsDetailsTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddDetails } from './Components/AddDetails/AddDetails';
import { ModifyData } from './Components/ModifyData/ModifyData';

const baseURL="http://localhost:3001";

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<StudentsDetailsTable baseURL={baseURL}/>} />
          <Route exact path="/students" element={<StudentsDetailsTable baseURL={baseURL}/>} />
          <Route exact path="/addStudents" element={<AddDetails baseURL={baseURL}/>} />
          <Route exact path="modifyData/:id" element={<ModifyData baseURL={baseURL}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
