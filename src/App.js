import './App.css';
import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrement = value => {
    switch (value) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodFeedback / countTotalFeedback()) * 100);
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={handleIncrement}
            />
          </Section>

          <Section title="Statistics">
            {countTotalFeedback() > 0 ? (
              <Statistics
                values={this.state}
                totalCount={countTotalFeedback()}
                percentage={countPositiveFeedbackPercentage()}
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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   options = Object.keys(this.state);

//   handleIncrement = value => {
//     this.setState(prevState => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <>
//         <div className="App">
//           <div className="container">
//             <Section title="Please leave feedback">
//               <FeedbackOptions
//                 options={this.options}
//                 onLeaveFeedback={this.handleIncrement}
//               />
//             </Section>

//             <Section title="Statistics">
//               {this.countTotalFeedback() > 0 ? (
//                 <Statistics
//                   values={this.state}
//                   totalCount={this.countTotalFeedback()}
//                   percentage={this.countPositiveFeedbackPercentage()}
//                 />
//               ) : (
//                 <Notification message="No feedback given" />
//               )}
//             </Section>
//           </div>
//           {/* <Feedback defaultProps={(good, neutral, bad)} /> */}
//         </div>
//       </>
//     );
//   }
// }

// export default App;
