import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import Head from "./head";
import Header from "./header"

const Readme = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [readmeFile, setReadmeFile] = useState('')

  useEffect(() => {
    axios(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((readme) => setReadmeFile(readme.data))
      .catch(() => setReadmeFile('README.md not found !!!') )
  },[])

  return <>
          <Head title='ReadMe'/>
          <Header userName={userName} repositoryName={repositoryName}/>
          <div id='description' className=" text-[#00BFFF] p-10  rounded-xl  bg-gradient-to-r from-[#000000]/80 via-[#00BFFF]/10 to-[#000000]/80">
            <ReactMarkdown>{readmeFile}</ReactMarkdown>
          </div>
        </>
}

Readme.propTypes = {}

export default React.memo(Readme)