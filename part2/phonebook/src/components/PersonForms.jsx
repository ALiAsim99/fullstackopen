 function PersonForm({newName,newNumber,handleNewName,handleNewNumber,addNewPerson}){

    return(
        <form onSubmit={addNewPerson}>
            <div>
                Name: <input value={newName} onChange={handleNewName}/>
            </div>
            <div>
                Number: <input value={newNumber} onChange={handleNewNumber}/>
            </div>
            <button>Add</button>
        </form>
    )

}

export default PersonForm