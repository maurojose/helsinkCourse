import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  );
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if(total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
  <div>
    <h2>Statistics</h2>
    <StatisticLine text="Good" value={props.good} />
    <StatisticLine text="Neutral" value={props.neutral} />
    <StatisticLine text="Bad" value={props.bad} />
    <StatisticLine text="Total" value={total} />
    <StatisticLine text="Average" value={(props.good + props.neutral + props.bad) / 3} />
    <StatisticLine text="Good" value={(props.good*100)/total + "%"} />
  </div>
 )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text = "Good" />
      <Button onClick={handleNeutral} text = "neutral" />
      <Button onClick={handleBad} text = "bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App