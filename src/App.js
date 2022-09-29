import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/ContactUs';
import Data from './pages/DataList';
import Data2 from './pages/DataList2';
import ContactEdit from './pages/ContactUsEdit';
import ContactDetail from './pages/ContactUsDetail';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Routes Public */}
          <Route path='/' element={<Contact />} />
          <Route path='/data' element={<Data />} />
          <Route path='/data2' element={<Data2 />} />
          <Route path='/contact-edit' element={<ContactEdit />} />
          <Route path='/contact-detail' element={<ContactDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
