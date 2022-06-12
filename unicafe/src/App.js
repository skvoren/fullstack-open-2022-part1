import { useState } from 'react'

const App = () => {
  const data = {
    feedback: {
        title: 'give feedback'
    },
    statistics: {
        title: 'statistics'
    }
  }

  const {feedback, statistics} = data;

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

  const averageScore = (good, bad, clicks) => {
    let result = 0;

    for (let i = 0; i < good; i++){
        result += 1
    }

    for (let i = 0; i < bad; i++) {
        result -= 1
    }

    return result = result / clicks
  }

  const positiveFeedbackPercent = (good, clicks) => {
    let result = 0;
    return result = (good / clicks) * 100
  }

  return (
    <div>
      <h2>{feedback.title}</h2>
      <button onClick={setGoodHandler}>good</button>
      <button onClick={setNeutralHandler}>neutral</button>
      <button onClick={setBadHandler}>bad</button>
      <h2>{statistics.title}</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {clicks}</p>
      <p>average {averageScore(good, bad, clicks)}</p>
      <p>positive {positiveFeedbackPercent(good, clicks)} %</p>
    </div>
  )
}

export default App