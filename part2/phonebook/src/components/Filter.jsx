 function Filter({setFilterName,handleFilter}){
    return(
        <div>
            filter shown with <input value={setFilterName} onChange={handleFilter} />
        </div>
    )


}

export default Filter;