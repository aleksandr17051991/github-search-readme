import React from 'react'
import { useParams } from 'react-router-dom'

import Head from './head'


const ReposList = () => {
  const { userName } = useParams()

  return (
    <>
      <Head title='Repositories'/>
      <div>{userName}</div>
    </>
  )
}

ReposList.propTypes = {}

export default React.memo(ReposList)