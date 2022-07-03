import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return <>
          <div className="text-2xl font-bold text-[#00BFFF] mb-5 px-10 py-2 rounded-md bg-gradient-to-r from-[#000000]/80 via-[#00BFFF]/10 to-[#000000]/80">
            {props.userName}
          </div>
          <Link to='/' className="text-[#ea580c] font-normal hover:font-bold no-underline hover:underline mb-2">Go back</Link>
        </>
}

Header.propTypes = {}

export default React.memo(Header)