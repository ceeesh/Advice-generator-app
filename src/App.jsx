import { useEffect, useState } from 'react'

function App() {
  const [advice, setAdvice] = useState('')

  const getAdvice = async () => {
    try{
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice(data.slip.advice)
      return data.slip.advice
    }catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline' onClick={getAdvice}> he{advice}</h1>
    </div>
  )
}

export default App
