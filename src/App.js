import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Order from './Order'
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Order' element={<Order/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
