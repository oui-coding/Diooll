import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import DoughnutChart from './DoughnutChart'
import Legend from './Legend'
import './Chart.css'

function Chart({data}) {

const [state, setState] = useState({dataChart:[{date: "Prepaid eRecharges : XAF ", value:16350,opac:"#CBE2F7"},{date:"Bills Payment Collection : XAF ", value: 0, opac:"#8AB0DD"}, {date: "Consumer Goods Reselling : XAF ", value: 0, opac:"#3C67A9"},{date: "Cash Deposits & Withdrawals : XHF ", value: 0,  opac:"#191745"}],
revenue:16350,
transaction:207,
})
//const dataChart= [{date: "Airtime eRecharges : XAF ", value: 8.000, opac:0.1},{date:"Bills Collection : XAF ", value: 2.000, opac:0.3}, {date: "Cash Deposits : XAF ", value: 5.000, opac:0.6},{date: "Cash Withdrawals : XHF ", value: 25.000, opac:0.8}]

// const totalValue=data.reduce((acc,elm)=> acc + elm.value,0)
// const lastWhite = {date:4 , value:100-totalValue, opac:0}
//  data.push(lastWhite)
// const dataLegend = data.filter((elm,i)=>i!==data.length-1);
// const [data, setData] = useState([{shop : '0', capital:50000, actifDay:15, transaction: 207, revenue:16350, recharge:16350, retrait:0, paiment:0,services:0 }])
 useEffect(()=>{
   if(data!==undefined){
  setState({dataChart:[{date: "Airtime eRecharges : XAF ", value: data.recharge, opac:"#CBE2F7"},{date:"Bills Collection : XAF ", value:data.paiment, opac:"#8AB0DD"}, {date: "Cash Deposits : XAF ", value: data.services, opac:"#3C67A9"},{date: "Cash Withdrawals : XHF ", value:data.retrait, opac:"#191745"}],
  revenue:data.revenue,
  transaction:data.transaction,
})
   }
},[data])  

 //console.log(data)

  return (
    <div className="BlockChat-contain">
      <div className="estimation-result">
  <p className="estimation-textCont"><span className="small-text-white">You may earn : </span> <span className="XAF-text"> XAF </span> <span className="number-earn">{state.revenue}</span></p>
       <p className="estimation-textCont secondtext-estim firstestim"><span className="small-text-white">by doing : </span><span className="small-text-white"> {state.transaction} transactionsper month</span></p>
       <p className="estimation-textCont secondtext-estim" style={{marginTop: '0.5vw'}}><span className="small-text-white">and working :</span><span className="small-text-white"> {state.actifDay} days per month</span></p>
      </div>
      <div className="chart-container">
        
        <DoughnutChart
          data={state.dataChart}
          width={200}
          height={200}
          innerRadius={80}
          outerRadius={100}
        />
        <Legend data={state.dataChart}/>
      </div>
    </div>
  );
}

export default Chart;


 