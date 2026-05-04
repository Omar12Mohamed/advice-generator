import {useEffect, useState}  from 'react'
import icon from './assets/icon-dice.svg'


function App() {
  const [text, setText] = useState(null);
  let isLoading = false;

  const fetchData = async ()=>{
  isLoading = true;
  let res = await  fetch('https://api.adviceslip.com/advice');
  let resData = await res.json();
  setText(resData);
  isLoading = false;  
  }

  useEffect( ()=>{
    fetchData()    
  } , [])


  return (
   <div className='container'>
    {
      isLoading ? (<p>please wait, loading...</p>) : (
        <>
          <h1>advice  #{text?.slip.id} </h1>
          <p> {text?.slip.advice} </p>
        </>
      )
    }
    

    <button onClick={ fetchData }>
      <img src={icon} alt="icon dice" />
    </button>
   </div>
  )
}

export default App
