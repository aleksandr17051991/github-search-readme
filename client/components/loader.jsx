import React from "react";
import Head from './head'

const Loader = () => {
  return (
    <>
      <Head title='Loading...'/>
      <div className="w-16 h-16 border-l-2 border-[#00BFFF] rounded-full animate-spin"> </div>
      <span className='text-[#00BFFF] mt-5'>Loading...</span>
    </>
  )
}

Loader.propTypes = {}

export default React.memo(Loader)