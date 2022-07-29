import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import Head from "./head";
import Header from "./header"
import Loader from "./loader";

const Readme = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [readmeFile, setReadmeFile] = useState('')
  const [load, setLoad] = useState(false)

  useEffect(() => {
    axios(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((readme) => {
        setReadmeFile(readme.data)
        setLoad(true)
      })
      .catch(() => setReadmeFile('README.md not found !!!') )
  },[])

  return <>
          <Head title='ReadMe'/>
          { load ?
          <>
            <Header userName={userName} repositoryName={repositoryName}/>
            <div id='description' className="text-white p-10  max-w-full overflow-x-auto border-2 border-[#00BFFF] rounded-xl  bg-gradient-to-r from-[#000000]/80 via-[#00BFFF]/10 to-[#000000]/80">
              <ReactMarkdown>{readmeFile}</ReactMarkdown>
            </div>
          </> : 
          <Loader />
          }
        </>
}

Readme.propTypes = {}

export default React.memo(Readme)