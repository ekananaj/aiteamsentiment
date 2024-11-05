import React, { useState, useEffect } from 'react';

function SentimentDashboard() {
  const [sentimentData, setSentimentData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/sentiment/trends')
      .then(response => response.json())
      .then(data => setSentimentData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Sentiment Trends</h2>
      <ul>
        {sentimentData.map((entry, index) => (
          <li key={index}>{entry.date}: {entry.sentiment}</li>
        ))}
      </ul>
    </div>
  );
}

export default SentimentDashboard;
