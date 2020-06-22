import React from 'react'
import "./Legend.css";

function Legend({data}) {
   console.log(data)
return(
<div className="legend-Contain">{data.map((elm,i)=>{
   return <div className="legendItem"><button className="arrawbtn" style={{background:"#191745", opacity:elm.opac}}></button> <p key={i} className="legend-text">{elm.date  + elm.value} </p> </div>
})
}</div>
)

}

export default Legend