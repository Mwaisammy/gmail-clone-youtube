import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './SideBar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Login from './Login';



function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  // console.log(user)

 
  return (
    <Router>

      {!user ? (
          <Login />
      ):(

      <div className="App"> 
        <Header />
        <div className="app__body">
          <SideBar />
        
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
          {/* <Section /> */}
        </div>
       {sendMessageIsOpen && <SendMail />}
      </div>
        
      )}
    </Router>
    
  );
}

export default App;
 