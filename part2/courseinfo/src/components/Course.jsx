function Header(props){
    return(
      <>
      <h1>{props.course}</h1>
      </>
    )
  }
  
  function Part({part}){
    return(
      
        <li>{part.name} {part.exercises}</li>
        
      
    )
  
  }
  function Content({parts}){
    
    return(
      <ul>
        {parts.map(part=><Part key={part.id} part={part} />)}
  
      </ul>
    )
    
  }
  function Total({parts}){
    const sum=parts.reduce((accumulator,b)=>accumulator+b.exercises,0);
    console.log(parts)
  return(
    <>
          <b>Number of exercises {sum}</b>
  
    </>
  )
  }
  function Course({course}){
  
    return(
      <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

  export default Course