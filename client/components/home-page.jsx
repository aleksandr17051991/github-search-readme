import React, { useState } from 'react'
import Head from './head'
import bg from '../assets/images/mainbg.jpg'
import { history } from '../redux'

const HomePage = () => {
 const [val, setVal] = useState('')

const changeInput = (event) => {
  setVal(event.target.value)
}

const onClick = () => {
  history.push(`/${val}`)
}

  return <>
    <Head title="Home" />
    <div className="flex justify-center items-center w-full h-screen bg-no-repeat bg-cover"
         style={{ backgroundImage: `url(${bg})`}}>

      <div className="flex flex-col justify-center p-10 rounded-xl select-none bg-gradient-to-r from-teal-400 to-stone-900">
        <h1 className="font-mono text-center text-white text-xl mb-2.5">Enter username</h1>
        
        <input id='input-field'
               type='text' 
               value={val} 
               onChange={changeInput} 
               className='rounded-md mb-2.5 p-2'/>

        <button type='button'
                id='search-button'
                onClick={onClick}
                className='bg-cyan-800  border-b-4 border-cyan-900'>
                  Search
        </button>
      </div>
    </div>
  </>
}

HomePage.propTypes = {}

export default React.memo(HomePage)
