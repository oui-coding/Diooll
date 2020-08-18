import React from 'react'
import "./Legend.css";

function Legend({ data }) {
   return (
      <div className="legend-Contain">{data.map((elm, i) => {
         return <div className="legendItem" key={i}><button className="arrawbtn" style={{ background: elm.opac }}></button>
            <p key={i} className="legend-text">{elm.date} <span className="legend-text-data">
               {'XAF ' + elm.value}</span> </p> </div>
      })
      }</div>
   )

}

export default Legend