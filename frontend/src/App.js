import React from 'react';
import SentimentDashboard from './components/SentimentDashboard';
import RealTimeAlerts from './components/RealTimeAlerts';

function App() {
  return (
    <div>
      <h1>Team Sentiment Tracker</h1>
      <RealTimeAlerts />
      <SentimentDashboard />
    </div>
  );
}

export default App;
