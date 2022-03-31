import React from 'react'

function Destination({url , title}) {
  return (
    <>
    <div className="single-destination-section">
<a href="#">
<img src={url} alt="" />
<p>{title}</p>

</a>

    </div>
    </>
  )
}

export default Destination