import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideBar from './SideBar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
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
    </Router>
    
  );
}

export default App;
