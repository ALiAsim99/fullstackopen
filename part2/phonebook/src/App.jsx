import { useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForms.jsx'
import Persons  from './components/Persons.jsx'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
    const [newName,setNewName]=useState('')
    const [filterName,setFilterName]=useState('');
    const [newNumber,setNewNumber]=useState('')

    const filterPersons = filterName
    ? persons.filter(p => p.name.toLowerCase().includes(filterName.toLowerCase()))
    : persons;
    
    const handleFilter=(e)=>{
      setFilterName(e.target.value)
    }

    const handleNewName=(e)=>{
      const input=e.target.value;
      setNewName(input)
    }
    const handleNewNumber=(e)=>{
      setNewNumber(e.target.value)
    }
    const addNewPerson = (e) => {
      e.preventDefault();
      const newObj = {
        name: newName,
        number: newNumber,
        id: persons.length ? Math.max(...persons.map(p => p.id)) + 1 : 1
      };
  
      const isDuplicate = persons.some(p => p.name === newObj.name);
  
      if (isDuplicate) {
        alert(`${newName} already in the phonebook`);
      } else {
        setPersons(prevPersons => [...prevPersons, newObj]);
        setNewName('');
        setNewNumber('');
      }
    };

    return (
      <div>
        <h2>Phonebook</h2>
  
        <Filter filterName={filterName} handleFilter={handleFilter} />
  
        <h3>Add a new</h3>
  
        <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addNewPerson={addNewPerson}/>
  
        <h3>Numbers</h3>
  
        <Persons persons={filterPersons} />
      </div>
    )
  
}

export default App
