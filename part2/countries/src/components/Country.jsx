const Country=({country})=>{
    Object.keys(country.languages).forEach(x=>console.log(x))
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h2>languages</h2>
            {Object.keys(country.languages).map(l=><li key={l}>{country.languages[l]}</li>)}
            <br/>
            <img src={country.flags.png}/>
        </div>
    )
}

export default Country