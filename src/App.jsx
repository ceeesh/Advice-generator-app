import { useEffect, useState } from 'react'
import dice from './assets/icon-dice.svg'
import divider from './assets/pattern-divider-desktop.svg'

function App() {
  const [advice, setAdvice] = useState("You can fail at what you don't want. So you might as well take a chance on doing what you love.")
  const [adviceId, setAdviceId] = useState("185")

  const getAdvice = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice(data.slip.advice)
      setAdviceId(data.slip.id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <div className="bg-graybg w-[500px] my-[300px] mx-auto px-[5px] pt-[15px] pb-[0px] text-center rounded-[10px]">
        <p className="tracking-[5px] text-[10px] font-medium text-greenish">ADVICE #<span className="decoration-greenish">{adviceId}</span></p>
        <p className="text-[25px] text-advc my-0 mx-[20px] pt-[5px] px-[35px] pb-[30px] leading-10 ">{advice}</p>
        <div className="text-center flex justify-center">
          <img src={divider} className="max-w-[100%]"/>
        </div>
        <div className="btn w-[60px] h-[60px] bg-btnc flex justify-center relative items-center left-[44%] top-[25px] transform-trans rounded-[50%] border-none pointer-events-auto">
          <img className=" w-[24px] h-[24px]" onClick={getAdvice} src={dice} />
        </div>
      </div>
    </div>
  )
}

export default App

