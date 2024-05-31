import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MyMoves from './components/MyMoves';
import MyProfile from './page/MyProfile';
import Logout from './page/Logout';
import GetRequest from './page/GetRequest';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>
   
        <Route
          path="*"
          element={
            <Sidebar>
              <Routes>
              <Route path="/" element={<MyMoves />} />
                <Route path="/my-moves" element={<MyMoves />} />
                <Route path='/my-profile' element={<MyProfile/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/get-request' element={<GetRequest/>}/>
              </Routes>
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
