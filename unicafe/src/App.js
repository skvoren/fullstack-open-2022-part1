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

  const setGoodHandler = () => {
    setGood(good + 1)
  }

  const setNeutralHandler = () => {
    setNeutral(neutral + 1)
  }

  const setBadHandler = () => {
    setBad(bad + 1)
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
    </div>
  )
}

export default App