import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/ContactUs';
import Data from './pages/DataList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes Public */}
        <Route path='/' element={<Contact />} />
        <Route path='/data' element={<Data />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
