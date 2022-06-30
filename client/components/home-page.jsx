import React from 'react'
import Head from './head'

const HomePage = () => (
  <>
    <Head title="Home" />
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-stone-900 to-teal-800">
      <div className="flex flex-col justify-center p-10 rounded-xl select-none bg-gradient-to-r from-teal-400 to-stone-900">
        <h1 className="font-mono text-center text-white text-xl mb-2.5">USER SEARCH</h1>
        <input type='text' className='rounded-md mb-2.5'/>
        <button type='button' className='bg-cyan-800 hover:bg-cyan-500 text-white font-bold py-2  border-b-4 border-cyan-900 hover:border-blue-900 rounded'>Click</button>
      </div>
    </div>
  </>
)

HomePage.propTypes = {}

export default React.memo(HomePage)
