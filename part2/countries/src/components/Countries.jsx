const Countries=({countries,handleShow})=>{
    return(
        <ul>
            {countries.map(c=><li key={c.cca3}>{c.name.common}<button onClick={()=>handleShow(c.name.common.toLowerCase())}>show</button></li>)}
        </ul>
    )

}
export default Countries