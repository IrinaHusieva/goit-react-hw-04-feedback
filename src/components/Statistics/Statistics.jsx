import React from 'react';
import styled from "./Statistics.module.css";
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
 
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p className={styled.positive}>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}