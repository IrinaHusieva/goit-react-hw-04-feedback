import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (type) => {
  if (type === 'good') {
    setGood((prev) => prev + 1);
  } else if (type === 'neutral') {
    setNeutral((prev) => prev + 1);
  } else if (type === 'bad') {
    setBad((prev) => prev + 1);
  }
};

  const countTotalFeedback = () => {
    
    return good + neutral + bad;;
  };
  
  const countPositiveFeedbackPercentage = () => {
     const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <p>There is no feedback yet.</p>
        </Section>
      )}
    </div>
  );
};

export default App;