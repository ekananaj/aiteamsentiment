import React, { useState, useEffect } from 'react';

function RealTimeAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8000/api/sentiment/alerts');
    
    eventSource.onmessage = (event) => {
      setAlerts((prevAlerts) => [...prevAlerts, JSON.parse(event.data)]);
    };

    return () => eventSource.close();
  }, []);

  return (
    <div>
      <h2>Real-Time Sentiment Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>Alert: {alert.message} - {alert.sentiment}</li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeAlerts;
