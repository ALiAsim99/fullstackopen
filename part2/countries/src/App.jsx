import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './components/Filter'
import axios from 'axios'
import { useEffect } from 'react'
import Country from './components/Country'
import Countries from './components/Countries'


function App() {

  const[countries,setCountries]=useState([]);
  const[filter,setFilter]=useState('')
  const[show,setShow]=useState(false);

  const handleShow=(e)=>{
   
        setFilter(e)
 
      
  }
  useEffect(()=>{
      axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res=>{
        setCountries(res.data)
          
      })
  },[])

  const handleFilter=(e)=>{
    setFilter(e.target.value);
  }
  console.log(countries)
  const filterCountries=countries==[]?[]:countries.filter(c=>c.name.common.toLowerCase().includes(filter.toLowerCase()))
  console.log(filterCountries)

  return(
    <>
    <div>
      <Filter filter={filter} handleFilter={handleFilter} />
     </div>
     <div>
      {filterCountries.length>10?(
        <p>Too many matches specify another filter</p>
      ):filterCountries.length==1?(<Country country={filterCountries[0]}/>) :filterCountries.length<10?(
 <Countries  countries={filterCountries} handleShow={handleShow}/>) :<p></p>}
     </div>
    </>
  )
}

export default App
