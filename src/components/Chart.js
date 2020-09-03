import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import DoughnutChart from './DoughnutChart'
import Legend from './Legend'
import './Chart.css'

import { useTranslation } from "react-i18next";

function insertDecimal(num) {
  let numString = num.toString().length
  let converted = Number((num / 1000).toFixed(3)).toString()
  return (numString === 6 && converted.length === 3) || (numString === 5 && converted.length === 2) || (numString === 4 && converted.length === 1) ? converted + '.000' : converted
}


function Chart({ data }) {

  const { t } = useTranslation()

  let dataPhrases = 
    [
      { date: `${t('Home.secondCardFeature.first_par')} : `, value: '16.350', opac: "#CBE2F7" },
      { date: `${t('Home.secondCardFeature.second_par')} : `, value: '-', opac: "#8AB0DD" },
      { date: `${t('Home.secondCardFeature.third_par')} : `, value: '-', opac: "#3C67A9" },
      { date: `${t('Home.secondCardFeature.fourth_par')} : `, value: '-', opac: "#191745" }
    ]
  

  const [state, setState] = 

  useState({

    dataPhrases:
      [
        { date: `${t('Home.secondCardFeature.first_par')} : `,  value: data !== undefined ? data.recharge : "16.350", opac: "#CBE2F7" },
        { date: `${t('Home.secondCardFeature.second_par')} : `, value: data !== undefined ? data.paiment : 0, opac: "#8AB0DD" },
        { date: `${t('Home.secondCardFeature.third_par')} : `, value: data !== undefined?  data.services : 0, opac: "#3C67A9" },
        { date: `${t('Home.secondCardFeature.fourth_par')} : `, value: data !== undefined ? data.retrait : 0, opac: "#191745" }],
    revenue: '16.350',
    transaction: 207,
    actifDay: 15
  })
  


 
  useEffect(() => {
    if (data !== undefined) {

      setState({
        dataPhrases: [
          { date: `${t('Home.secondCardFeature.first_par')} :  `, value: data.recharge, opac: "#CBE2F7" }
          , { date: `${t('Home.secondCardFeature.second_par')} :  `, value: data.paiment, opac: "#8AB0DD" }
          , { date: `${t('Home.secondCardFeature.third_par')} :  `, value: data.services, opac: "#3C67A9" }
          , { date: `${t('Home.secondCardFeature.fourth_par')} :  `, value: data.retrait, opac: "#191745" }
        ],
        revenue: data.revenue,
        transaction: data.transaction,
        actifDay: data.actifDay
      })
    }
  }, [data])

  return (
    <div className="BlockChat-contain">
      <div className="estimation-result">
        <p className="estimation-textCont"><span className="small-text-white">{t('Home.homeCard.first_par')} : </span> 
        <span className="XAF-text" id="xafText"> XAF </span> <span className="number-earn">{state.revenue}</span></p>
        <p className="estimation-textCont secondtext-estim firstestim"><span className="small-text-white">{t('Home.homeCard.second_par')} : </span><span className="small-text-white"> {state.transaction} {t('Home.homeCard.third_par')}</span></p>
        <p className="estimation-textCont secondtext-estim" style={{ marginTop: '0vw' }}><span className="small-text-white">{t('Home.homeCard.fifth_par')} :</span><span className="small-text-white"> {state.actifDay} {t('Home.homeCard.fourth_par')}</span></p>
      </div>
      <div className="chart-container">

        <DoughnutChart
          data={state.dataPhrases}
          width={200}
          height={200}
          innerRadius={80}
          outerRadius={100}
        />
        <Legend data={state.dataPhrases} />
      </div>
    </div>
  );
}

export default Chart;


