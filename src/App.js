
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Headers from './components/Headers';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  
  return ( 
     <FeedbackProvider>
            <Router>
            <Headers/>
            <div className="container">
               <Routes>
                  <Route exact path='/' element={
                     <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList/>
                     </>
                  }>
                  </Route >
                  <Route path='/about' element={<AboutPage />} />
               </Routes>
               <AboutIconLink />
            </div>
         </Router>
     </FeedbackProvider>
     
  )
}

export default App;
