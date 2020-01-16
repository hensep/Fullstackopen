import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
    console.log('arpa ', selected)
    console.log('taulukko ', points)

    const NextRandomAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const AddVote = () => {
        const copy = [...points]

        copy[selected] += 1
        setPoints(copy)
    }

    const MostVotesAndIndex = (votes) => {
        let most = 0
        let mostIndex = 0

        for (let i in votes) {
            if (votes[i] > most) {
                most = votes[i]
                mostIndex = i
            }
        }
        return [most, mostIndex]
    }

    const [most, mostIndex] = MostVotesAndIndex(points)

    return (
        <div>
            <h2>Anecdote of the day</h2>
            {props.anecdotes[selected]}
            <p>has {points[selected]} votes</p>
            <Button handleClick={() => AddVote()} text='vote' />
            <Button handleClick={() => NextRandomAnecdote()} text='next anecdote' />
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostIndex]}</p>
            <p>has {most} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)