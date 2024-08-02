 function Filter({filter,handleFilter}){

    return(
        <>
        currency <input  value={filter} onChange={handleFilter} />
        </>
    )
}

export default Filter