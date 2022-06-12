import React from "react";

const Statistics = ({statData}) => {

    const [good, neutral, bad, clicks] = statData;

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
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {clicks}</p>
            <p>average {averageScore(good, bad, clicks)}</p>
            <p>positive {positiveFeedbackPercent(good, clicks)} %</p>
        </div>

    )
    
}

export default Statistics