import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, deletePerson}) => {
  let filteredPersons = persons
  if (filter) {
    filteredPersons = filteredPersons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const rows = () => filteredPersons.map(person =>
    <Person
      key={person.name}
      person={person}
      number={person.number}
      deletePerson={() => deletePerson(person.id)}
    />
  )

  console.log('filteredPersons', filteredPersons)
  return (
    <ul>
      {rows()}
    </ul>
  )
}

export default Persons