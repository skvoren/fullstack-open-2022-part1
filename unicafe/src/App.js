import { useState } from 'react'
import Statistics from './Statistics';
import Button from './Button';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)

  const setGoodHandler = () => {
    setGood(good + 1)
    setClicks(clicks + 1)
  }

  const setNeutralHandler = () => {
    setNeutral(neutral + 1)
    setClicks(clicks + 1)
  }

  const setBadHandler = () => {
    setBad(bad + 1)
    setClicks(clicks + 1)
  }

  var statData = [good, neutral, bad, clicks]

  return (
    <div>
      <h2>give feedback</h2>
      <Button handle={setGoodHandler} text={"good"}/>
      <Button handle={setNeutralHandler} text={"neutral"}/>
      <Button handle={setBadHandler} text={"bad"}/>
      <Statistics statData={statData}/>
    </div>
  )
}

export default App