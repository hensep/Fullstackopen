import React from 'react'

const PersonForm = ({ onSubmit, handlePersonChange, handleNumberChange }) => {
    return (
        <form onSubmit={onSubmit}>
            name:<input onChange={handlePersonChange} />
            <br/>
            number:<input onChange={handleNumberChange} />
            <br/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default PersonForm