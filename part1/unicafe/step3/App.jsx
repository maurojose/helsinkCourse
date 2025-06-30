import { useState } from 'react'

const Display = (props) => {
 return(
  <div>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
  </div>
 )
}
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
 return(
  <div>
    <p>Total: {total}</p>
    <p>Average: {(props.good + props.neutral + props.bad) / 3}</p>
    <p>Good: {(props.good*100)/total}%</p>
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

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text = "Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text = "neutral" />
      <Button onClick={() => setBad( bad + 1)} text = "bad" />
      <Display good={good} neutral={neutral} bad={bad} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App