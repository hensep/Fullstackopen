import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Hello = ({ name, age }) => {
  const bornYear = () =>  new Date().getFullYear() - age
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born {bornYear()}</p>
      </div>
    )
  }
  
  const App = (props) => {
    const nimi = 'Pekka'
    const ika = 10

    const [counter, setCounter] = useState(0)

    const setToValue = (value) => setCounter(value)

    const handleClick = () => {
      console.log('clicked')
    }

/*     setTimeout(
      () => setCounter(counter + 1),
      1000
    ) */

    console.log('rendering...', counter)

    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26+10} />
        <Hello name={nimi} age={ika} />

        <Display counter={counter}/>
        <Button
          onClick={() => setToValue(counter + 1)}
          text='plus'
        />
        <Button
          onClick={() => setToValue(0)}
          text='zero'
        />
      </div>
    )
  }

  let counter = 1

  ReactDOM.render(
    <App counter = {counter} />,
    document.getElementById('root')
  )