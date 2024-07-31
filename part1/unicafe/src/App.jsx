import { useState } from 'react'

function Button({onClick,text}){
      return(
        <>
        <button onClick={onClick}>{text}</button>
        </>
      )

 } 

 function StatisticsLine({text,value}){

    return(

      <tr>
        <td>
        <p>{text} {value}</p>
        </td>
      </tr>
    )
 }

 function Statistics({good,bad,neutral}){
    let total=good+bad+neutral;
  if(total==0){
    return(
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="total" value={total}/>
      <StatisticsLine text="average" value={((good+(bad*-1))/total).toFixed(2)}/>
      <StatisticsLine text="positive" value= {((100*good)/total).toFixed(2)+"%"}/>
      </tbody>
      
    </table>
  )
 }

 function App() {

  const [good,setGood]=useState(0);
  const [bad,setBad]=useState(0);
  const [neutral,setNeutral]=useState(0);

  const handleGood=()=>{
    setGood(good+1);
    
  
  }
  const handleBad=()=>{
    setBad(bad+1);

  }
  const handleNeutral=()=>{
    setNeutral(neutral+1)

  }

  return (
    <>
    <h1>Give Feedback</h1>
      <Button onClick={()=>handleGood()}  text="good"/>
      <Button onClick={()=>handleBad()}  text="bad"/>
      <Button onClick={()=>handleNeutral()}  text="neutral"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}  />
    </>
  )
}

export default App
