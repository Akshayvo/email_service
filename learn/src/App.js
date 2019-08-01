import React from 'react';
import './App.css';
import MyinfoComponent from './components/myinfo/Myinfo.component';
import Footer from './components/footer/footer.component';
import NavBar from './components/navbar/Navbar.component';

function App() {
  return (
    <div>
      <NavBar />
      <MyinfoComponent />
      <Footer />
    </div>
  );
}

export default App;
