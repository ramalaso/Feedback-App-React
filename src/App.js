import { useState } from 'react';
import './App.css';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Headers from './components/Headers';
import FeedbackData from './data/FeedbackData';

function App() {
   const [feedback, setFeedback] = useState(FeedbackData)

   const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item)=> item.id !== id))
      }
      
   }
  
  return ( 
     <>
      <Headers/>
      <div className="container">
         <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
     </>
  )
}

export default App;
