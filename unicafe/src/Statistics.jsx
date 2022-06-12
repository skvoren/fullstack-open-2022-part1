import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({statData}) => {

    const title = 'statistics'

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
    return result = (good / clicks) * 100 + " %"
    }

    if (clicks > 0) {
        return (
            <div>
                <h2>{title}</h2>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={clicks}/>
                <StatisticLine text="average" value={averageScore(good, bad, clicks)}/>
                <StatisticLine text="positive" value={positiveFeedbackPercent(good, clicks)}/>
            </div>
        ) 
    } else {
        return (
            <div>
                <h2>{title}</h2>
                <p>No feedback given</p>
            </div>
        )
    }
}

export default Statistics