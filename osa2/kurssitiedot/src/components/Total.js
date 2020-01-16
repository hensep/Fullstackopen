import React from 'react'

const Total = ({ course }) => {
    const parts = course.parts
    const total = parts.reduce((total, part) => total + part.exercises, 0)

    return (
        <p><b>total of {total} exercises</b></p>
    )
}

export default Total