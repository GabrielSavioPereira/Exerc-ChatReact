import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='border w-[50vh] h-[30px] text-left rounded '>
        <h2 className='ml-[10px] text-blue-500'>Atendimento online</h2>
        </div>
      <div className='border h-[25rem] '>
        <div className='border ml-[5px] mt-[35px] max-w-[250px] rounded'>
          <p className='text-left ml-[10px]'>Boa noite, oq deseja?</p>
        </div>
        <div className='border mt-[35px] max-w-[250px] rounded ml-[255px]'>
          <p className='text-left ml-[10px]'>Desejo que você se cale</p>
        </div>
        <div className='border mt-[35px] max-w-[250px] rounded'>
          <p className='text-left ml-[10px]'>Boa noite, oq deseja?</p>
        </div>
        <div className='border mt-[35px] max-w-[250px] rounded ml-[255px]'>
          <p className='text-left ml-[10px]'>Boa noite, oq deseja?</p>
        </div>

        
      </div>
    </>
  )
}

export default App
