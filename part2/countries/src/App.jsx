import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './components/Filter'
import axios from 'axios'
import { useEffect } from 'react'
import Country from './components/Country'
function App() {

  const[countries,setCountries]=useState([]);
  const[filter,setFilter]=useState('')

  useEffect(()=>{
      axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res=>{
        setCountries(res.data)
          
      })
  },[])

  const filterCountries=countries==[]?[]:countries.filter(c=>c.name.common.toLowerCase().includes(filter.toLowerCase()))
  console.log(filterCountries)
  const handleFilter=(e)=>{
    setFilter(e.target.value);
  }


  return(
    <>
    <div>
      <Filter filter={filter} handleFilter={handleFilter} />
     </div>
     <div>
      {filterCountries.length>10?(
        <p>Too many matches specify another filter</p>
      ):filterCountries.length==1?(<Country country={filterCountries[0]}/>) :filterCountries.length<10?(
        <ul>
          {filterCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)}
        </ul>
      ) :<p></p>}
     </div>
    </>
  )
}

export default App
