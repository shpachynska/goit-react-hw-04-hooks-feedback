import './App.css';
import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  handleIncrement = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="container">
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={this.options}
                onLeaveFeedback={this.handleIncrement}
              />
            </Section>

            <Section title="Statistics">
              {this.countTotalFeedback() > 0 ? (
                <Statistics
                  values={this.state}
                  totalCount={this.countTotalFeedback()}
                  percentage={this.countPositiveFeedbackPercentage()}
                />
              ) : (
                <Notification message="No feedback given" />
              )}
            </Section>
          </div>
          {/* <Feedback defaultProps={(good, neutral, bad)} /> */}
        </div>
      </>
    );
  }
}

export default App;
