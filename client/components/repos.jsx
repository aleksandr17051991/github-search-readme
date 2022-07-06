import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import Header from './header'


const UserReposList = (props) => {

  const list = props.reposList.map((repo) => {
    return <li key={repo.id} className="text-[#00BFFF] no-underline hover:underline">
        <Link to={`/${props.userName}/${repo.name}`}>{repo.name}</Link>
      </li>
  })

  return <ol className='list-decimal list-inside'>{list}</ol>
}

const Repos = () => {
  const { userName } = useParams()
  const [reposList, setReposList] = useState([])
  
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`)
      .then((list) => setReposList(list.data))
  },[])

  return (
    <>
      <Head title='Repositories'/>
      <Header userName={userName}/>
      <div className="p-10 rounded-xl  bg-gradient-to-r from-[#000000]/80 via-[#00BFFF]/10 to-[#000000]/80">
        <UserReposList reposList={reposList} userName={userName}/>
      </div>
    </>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)