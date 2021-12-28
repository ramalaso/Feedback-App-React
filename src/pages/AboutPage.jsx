import React from 'react'
import Card from '../shared/Card';

function AboutPage() {
   return (
      <Card>
         <div className="about">
            <h1>About this project</h1>
            <p>This a react app to leave feedback for the product or service</p>
            <p>Version: 1.0.0</p>
            <p>
               <a href="/"> Back to Home</a>
            </p>
         </div>
      </Card>
   )
}

export default AboutPage
