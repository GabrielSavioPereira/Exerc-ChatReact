import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='border w-[500px] text-left rounded '>
        <h2 className='ml-[10px] text-blue-500'>Atendimento online</h2>
        </div>
      <div className='border h-[350px] '>
        <div className='border mt-[35px] max-w-[250px] rounded'>
          <p className='text-left ml-[10px]'>Boa noite, oq deseja?</p>
        </div>
      

      
      </div>
    </>
  )
}

export default App
