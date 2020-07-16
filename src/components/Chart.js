import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import DoughnutChart from './DoughnutChart'
import Legend from './Legend'
import './Chart.css'


function insertDecimal(num) {
  let numString=num.toString().length
  let converted =  Number((num / 1000).toFixed(3)).toString()
  return (numString===6 && converted.length===3) || (numString===5 && converted.length===2)  || (numString===4 && converted.length===1) ? converted+'.000' :  converted
}


function Chart({data}) {

const [state, setState] = useState({dataChart:[{date:  "Prepaid eRecharges : ", value:21175,opac:"#CBE2F7"},{date:"Bills Payment Collection : ", value:8950, opac:"#8AB0DD"}, {date: "Consumer Goods Reselling : ", value: 18760, opac:"#3C67A9"},{date: "Cash Deposits & Withdrawals : ", value:32915,  opac:"#191745"}],
revenue:'81.800',
transaction:400,
actifDay:18
})


// {
//   shop: "0",
//   capital: 400000,
//   actifDay: 20,
//   transaction: 400,
//   revenue: 81800,
//   recharge: 21175,
//   retrait: 32915,
//   paiment: 8950,
//   services: 18760,
// },
//const dataChart= [{date: "Airtime eRecharges : XAF ", value: 8.000, opac:0.1},{date:"Bills Collection : XAF ", value: 2.000, opac:0.3}, {date: "Cash Deposits : XAF ", value: 5.000, opac:0.6},{date: "Cash Withdrawals : XHF ", value: 25.000, opac:0.8}]

// const totalValue=data.reduce((acc,elm)=> acc + elm.value,0)
// const lastWhite = {date:4 , value:100-totalValue, opac:0}
//  data.push(lastWhite)
// const dataLegend = data.filter((elm,i)=>i!==data.length-1);
// const [data, setData] = useState([{shop : '0', capital:50000, actifDay:15, transaction: 207, revenue:16350, recharge:16350, retrait:0, paiment:0,services:0 }])
 useEffect(()=>{
   if(data!==undefined){
  setState({dataChart:[{date: "Prepaid eRecharges : ", value: data.recharge, opac:"#CBE2F7"},{date:"Bills Payment Collection : ", value:data.paiment, opac:"#8AB0DD"}, {date: "Consumer Goods Reselling : ", value: data.services, opac:"#3C67A9"},{date:  "Cash Deposits & Withdrawals : ", value:data.retrait, opac:"#191745"}],
  revenue:data.revenue,
  transaction:data.transaction,
  actifDay:data.actifDay
})
   }
},[data])  

 console.log(data)

  return (
    <div className="BlockChat-contain">
      <div className="estimation-result">
  <p className="estimation-textCont"><span className="small-text-white">You may earn : </span> <span className="XAF-text"> XAF </span> <span className="number-earn">{state.revenue}</span></p>
       <p className="estimation-textCont secondtext-estim firstestim"><span className="small-text-white">by doing : </span><span className="small-text-white"> {state.transaction} transactionsper month</span></p>
       <p className="estimation-textCont secondtext-estim" style={{marginTop: '0vw'}}><span className="small-text-white">and working :</span><span className="small-text-white"> {state.actifDay} days per month</span></p>
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


 