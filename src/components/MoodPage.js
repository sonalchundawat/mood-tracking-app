import React, { useState } from 'react';

const MoodPage = () => {
  const [mood, setMood] = useState('');
  const [moodMessage, setMoodMessage] = useState('');

  const handleMoodSubmit = (e) => {
    e.preventDefault();

    // Check the mood and set the message
    let message = '';
    if (mood.toLowerCase().includes('angry')) {
      message = 'Your mood is Angry!';
    } else if (mood.toLowerCase().includes('happy')) {
      message = 'Your mood is Happy!';
    } else if (mood.toLowerCase().includes('sad')) {
      message = 'Your mood is Sad!';
    } else {
      message = `You are feeling: ${mood}`;
    }

    setMoodMessage(message);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleMoodSubmit}>
        <h1>How are you feeling?</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your mood..."
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
      {moodMessage && <div className="mood-message">{moodMessage}</div>}
    </div>
  );
};

export default MoodPage;
