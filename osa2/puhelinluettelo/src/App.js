import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import phonebookService from './services/phonebookService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState(
    {
      message: null,
      type: null
    })

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNameAndNumber = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    const isThere = (persons, name) => {
      for (let i in persons) {
        if (persons[i].name.toLowerCase() === name.toLowerCase()) return true
      }
      return false
    }

    if (isThere(persons, nameObject.name)) {
      const newNotification = {
        message: `Name '${nameObject.name}' is already added to the phonebook`,
        type: 'error'
      }
      setNotification(newNotification)
    }
    setTimeout(() => {
      setNotification({
        message: null,
        type: null
      })
    }, 5000);

    phonebookService
      .create(nameObject)
      .then(returnedName => {
        const newNotification = {
          message: `Added '${nameObject.name}' to the phonebook`,
          type: 'notification'
        }
        setNotification(newNotification)
        setPersons(persons.concat(returnedName))
      })
    setTimeout(() => {
      setNotification({
        message: null,
        type: null
      })
    }, 5000);
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  const handleDeletePerson = (id) => {
    const personIndex = persons.findIndex(person => person.id === id)

    if (window.confirm(`Delete '${persons[personIndex].name}'?`)) {
      phonebookService
        .deletePerson(id)
        .then(() => {
          const newNotification = {
            message: `Deleted '${persons[personIndex].name}' from the phonebook`,
            type: 'notification'
          }
          setNotification(newNotification)
          setPersons(persons.filter(person => person.id !== id))
        })
      setTimeout(() => {
        setNotification({
          message: null,
          type: null
        })
      }, 5000);
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

      <Filter handleFilterChange={handleFilterChange} />

      <h3>add a new</h3>
      <PersonForm
        onSubmit={addNameAndNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={searchTerm} deletePerson={handleDeletePerson} />
    </div>
  )
}

export default App