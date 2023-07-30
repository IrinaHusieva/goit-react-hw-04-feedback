import React from 'react';
import styled from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback })=> {
 
    return (
      <div className={styled.btns}>
        <button className={styled.good} onClick={() => onLeaveFeedback('good')}>Good</button>
        <button className={styled.neutral} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button className={styled.bad} onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  }

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

