import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userdetails, setUserdetails] = useState({
    name: '',
    fatherName: ''
  })

  const [users, setUsers] = useState([])
  const handle = () => {
    userdetails.name !== '' && userdetails.fatherName !== '' ? setUsers([...users, userdetails]) : alert('Please Enter All Details')
    setUserdetails({
      name: '',
      fatherName: ''
    })
  }

  console.log(users);
  
  return (
    <>
    <div className='w-full h-screen bg-slate-800 flex justify-center items-center flex-col gap-12'>
    <div className='w-1/2 flex flex-col gap-4'>
    <input value={userdetails.name} onChange={(e) => setUserdetails({...userdetails, name: e.target.value})} type="text" placeholder='Enter Name' className='w-full p-2 rounded border-2 border-green-600' />
    <input value={userdetails.fatherName} onChange={(e) => setUserdetails({...userdetails, fatherName: e.target.value})} type="text" placeholder='Enter Father Name' className='w-full p-2 rounded border-2 border-green-600' />
    <button onClick={handle}  className='p-2 w-1/4 bg-green-400 text-white rounded'>Submit</button>
    </div>

    <div className='w-1/2 '>
    {
          users.map((item, index) => {
            return (
              <div key={index} className='flex flex-col gap-4 border-b-4 border-orange-500'>
                <h1 className='text-x1 py-2 text-orange-500'>User {index + 1}</h1>
                <p className='text-2xl text-white font-extralight '>Name: {item.name}</p>
                <p className='text-2xl  text-white font-extralight mb-4'>Father Name: {item.fatherName}</p>
              </div>
            )
          })
        }
    </div>

    </div>
    </>
  )
}

export default App
