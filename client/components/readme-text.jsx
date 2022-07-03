import React from "react";
import { useParams } from "react-router-dom";
import Head from "./head";

const Readme = () => {
  const { repositoryName } = useParams()

  return <>
          <Head title='ReadMe'/>
          <div className="text-[#00BFFF]">{repositoryName}</div>
        </>
}

Readme.propTypes = {}

export default React.memo(Readme)