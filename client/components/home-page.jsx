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
      <div className="flex flex-col justify-center p-20 rounded-xl select-none bg-gradient-to-r from-[#00BFFF]/30 to-[#000000]/60">
        <h1 className="text-center text-2xl font-bold text-[#00BFFF] mb-3">Enter username</h1>
        
        <input id='input-field'
               type='text' 
               value={val} 
               onChange={changeInput} 
               className='rounded-md mb-2.5 p-2'/>

        <button type='button'
                id='search-button'
                onClick={onClick}
                className='bg-[#00BFFF]  border-b-4  rounded border-[#1E90FF]'>
                  Search
        </button>
      </div>
  </>
}

HomePage.propTypes = {}

export default React.memo(HomePage)
