import { useState } from 'react'

function Anectode({anecdotes,votes}){
  return(<>
    <p>{anecdotes}</p>
    <p>has {votes} votes</p>
  </>)
}

function Button({onClick,text}){
  return (
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected,setSelected]=useState(0);
  const [votes,setVote]=useState(Array(anecdotes.length).fill(0));

  const handleSelected=()=>{
    setSelected(Math.floor(Math.random()*anecdotes.length));
  }
  const handleVote=()=>{
    const newVotes=[...votes];
    newVotes[selected]+=1;
    setVote(newVotes);
  }
  
  const maxVote=Math.max(...votes);
  const maxIndex=votes.indexOf(maxVote);

  return(
    <>
      <h1>Anectode of the day</h1>
      <Anectode anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVote} text="votes"/>
      <Button onClick={handleSelected} text="next anectode"/>
      {maxVote>0 && (<>
        <h2>Most Voted of the day</h2>
        <Anectode anecdotes={anecdotes[maxIndex]} votes={votes[maxIndex]}/>
      </>)}
    </>
  )
}

export default App
