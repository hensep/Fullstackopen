import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({ text, result, char }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{result.toFixed(2)}{char}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
    const positive = good / (good + neutral + bad) * 100

    if (all === 0) {
        return (
            <div>
                <p>Ei annettuja palautteita</p>
            </div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    <Statistic text='Hyvä' result={good} />
                    <Statistic text='Neutraali' result={neutral} />
                    <Statistic text='Huono' result={bad} />
                    <Statistic text='Yhteensä' result={all} />
                    <Statistic text='Keskiarvo' result={average} />
                    <Statistic text='Positiivisia' result={positive} char='%' />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [x, setX] = useState(0)
    console.log(x)

    return (
        <div>
                  {x}
      <button onClick={()=>setX(10)}>press</button>
            <h1>Anna palautetta</h1>
            <Button handleClick={() => setGood(good + 1)} text='Hyvä' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='Neutraali' />
            <Button handleClick={() => setBad(bad + 1)} text='Huono' />
            <h1>Statistiikka</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)