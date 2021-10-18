import React from 'react'
import Leftsection from './leftsection/Leftsection'
import Rightsection from './rightsection/Rightsection'
const Undersection = () => {
    return (
        <>
        <div className="container">
          <div className="main__section">
            <Leftsection></Leftsection>
            <Rightsection> </Rightsection>
          </div>
        </div>
      </>
    )
}

export default Undersection
