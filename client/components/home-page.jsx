import React, { useState } from 'react'
import Head from './head'

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
      <div className="flex flex-col justify-center p-11 rounded-xl  bg-gradient-to-r from-[#00BFFF]/30 to-[#000000]/60">
        <h1 className="text-center text-2xl font-bold text-[#00BFFF] mb-3">Enter username</h1>
        
        <input id='input-field'
               type='text' 
               value={val} 
               onChange={changeInput} 
               className='rounded-md mb-3.5 p-2'/>

        <button type='button'
                id='search-button'
                onClick={onClick}
                className='px-4 py-2 text-white bg-[#00BFFF] rounded-full hover:shadow-lg hover:shadow-cyan-500/50'>
                Search
        </button>
      </div> 
  </>
}

HomePage.propTypes = {}

export default React.memo(HomePage)
