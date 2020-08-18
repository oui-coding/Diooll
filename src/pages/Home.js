import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import Chart from "../components/Chart";
import "./Home.css";
import { useTranslation } from "react-i18next";

const Home = (props) => {

  const {t} = useTranslation()

  const InitialData = [
    {
      shop: "0",
      capital: '50.000',
      actifDay: 15,
      transaction: 207,
      revenue: '16.350',
      recharge: '16.350',
      retrait: 0,
      paiment: 0,
      services: 0,
    },
    {
      shop: "0",
      capital: '150.000',
      actifDay: 18,
      transaction: 269,
      revenue: '36.800',
      recharge: '20.300',
      retrait: '10.050',
      paiment: '6.450',
      services: 0,
    },
    {
      shop: "0",
      capital: '400.000',
      actifDay: 20,
      transaction: 400,
      revenue: '81.800',
      recharge: '21.175',
      retrait: '32.915',
      paiment: '8.950',
      services: '18.760',
    },
    {
      shop: "0",
      capital: '1.000.000',
      actifDay: 24,
      transaction: 524,
      revenue: '148.700',
      recharge: '23.925',
      retrait: '83.700',
      paiment: '13.575',
      services: '27.500',
    },
    {
      shop: "0",
      capital: '2.000.000',
      actifDay: 24,
      transaction: 550,
      revenue: '186.600',
      recharge: '23.430',
      retrait: '118.095',
      paiment: '15.575',
      services: '29.500',
    },
    {
      shop: "1",
      capital: '150.000',
      actifDay: 18,
      transaction: 220,
      revenue: '70.300',
      recharge: '54.900',
      retrait: '2.500',
      paiment: '12.900',
      services: 0,
    },
    {
      shop: "1",
      capital: '400.000',
      actifDay: 20,
      transaction: 420,
      revenue: '225.000',
      recharge: '186.850',
      retrait: '20.250',
      paiment: '17.900',
      services: 0,
    },
    {
      shop: "1",
      capital: '1.000.000',
      actifDay: 24,
      transaction: 585,
      revenue: '360.000',
      recharge: '256.750',
      retrait: '76.000',
      paiment: '27.250',
      services: 0,
    },
    {
      shop: "2",
      capital: '150.000',
      actifDay: 18,
      transaction: 225,
      revenue: '74.150',
      recharge: '61.550',
      retrait: '2.600',
      paiment: '10.000',
      services: 0,
    },
    {
      shop: "2",
      capital: '400.000',
      actifDay: 20,
      transaction: 385,
      revenue: '205.000',
      recharge: '172.125',
      retrait: '17.875',
      paiment: '15.000',
      services: 0,
    },
    {
      shop: "2",
      capital: '1.000.000',
      actifDay: 24,
      transaction: 623,
      revenue: '388.200',
      recharge: '283.000',
      retrait: '80.200',
      paiment: '25.000',
      services: 0,
    },
    {
      shop: "3",
      capital: '500.000',
      actifDay: 20,
      transaction: 373,
      revenue: '57.800',
      recharge: '14.485',
      retrait: '28.315',
      paiment: '15.000',
      services: 0,
    },
    {
      shop: "3",
      capital: '125.0000',
      actifDay: 24,
      transaction: 683,
      revenue: '146.375',
      recharge: '9.060',
      retrait: '120.315',
      paiment: '17.000',
      services: 0,
    },
    {
      shop: "3",
      capital: '2.500.000',
      actifDay: 24,
      transaction: 709,
      revenue: '189.182',
      recharge: '8.930',
      retrait: '160.252',
      paiment: '20.000',
      services: 0,
    },
    {
      shop: "3",
      capital: '3.000.000',
      actifDay: 24,
      transaction: 713,
      revenue: '224.318',
      recharge: '4.584',
      retrait: '194.734',
      paiment: '25.000',
      services: 0,
    },
  ];

  const [estimate, setEstimate] = useState(true);
  const [value, setValue] = useState("Street Kiosk");
  const [capitals, setCapitals] = useState([
    { value: "0", dropvalues: ['150.000', '400.000', '1.000.000', '2.000.000'] },
  ]);
  const [capitalsvalue, setCapitalsvalue] = useState(400000);
  const [data, setData] = useState([]);
  const capitalsValues = [
    { value: "0", dropvalues: ['150.000', '400.000', '1.000.000', '2.000.000'] },
    { value: "1", dropvalues: ['150.000', '400.000', '1.000.000'] },
    { value: "2", dropvalues: ['150.000', '400.0000', '1.000.000'] },
    { value: "3", dropvalues: ['500.000', '1.250.000', '2.500.000', '3.000.000'] },
  ];

  const size = useWindowSize();
  //hook
  function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      setValue("Street Kiosk");
      if (!isClient) {
        return false;
      }
      setData([]);
      function handleResize() {
        setWindowSize(getSize());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }

    const handlechangeShop = (e) => {
    setValue(e.target.value);

    const capt = capitalsValues.filter((elm) => elm.value === e.target.value);
    const result = capt[0].dropvalues;
    setCapitalsvalue(result[0]);
    setCapitals(capt);
  };
  const handlechangeCapital = (e) => {
    setCapitalsvalue(e.target.value);
    setData([]);
  };

  const estimateToChart = (e) => {
    setData([]);
    
    e.preventDefault();
    setData(
      InitialData.filter(
        (elm) => elm.shop == value && elm.capital == capitalsvalue
      )
    );
    setEstimate(false);
  };

  

 
  return (
    <div className="Home">
      <Header />
      <div className="container-page">
        <Introduction />
        
        {/* <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>  */}
        <div className="estimate_revenues">
        <div className="aboutIntro" style={{marginBottom:'2vw',marginTop:'1.5vw'}}>
        <h1 className="aboutIntro-secondTitle">{t('Home.estimateTitle')}</h1>
        </div>
            {/* <div className="estimate_revenues_container first-container" style={{height: "43.5vw"}}> */}
            <div className="estimate_revenues_container first-container" >
              <h1>{t('Home.estimateTitle_2')}</h1>
              <form
                action=""
                style={
                  size.width > 767
                    ? {}
                    : { display: estimate ? "block" : "none" }
                }
              > <div>
                <h2>{t('Home.question_1')}</h2>
                <div className="select_activity_sector">
                  <label className="labelselectstyle">
                    <select
                      id="what_shop"
                      defaultValue="Street Kiosk"
                      onChange={handlechangeShop}
                    >
                      <option disabled={true} defaultValue>
                       {t('Home.option_0')}
                      </option>
                      <option value="0">{t('Home.option_1')}</option>
                      <option value="1">{t('Home.option_2')}</option>
                      <option value="2">{t('Home.option_3')}</option>
                      <option value="3">{t('Home.option_4')}</option>
                    </select>
                  </label>
                </div>
                </div>
                <div>
                <h2>{t('Home.question_2')}</h2>
                <div className="select_activity_sector" style={{display:'flex'}}>
                  <p className='xaf-select'>XAF</p>
                {/* <span>XAF </span> */}
                  <label className="labelselectstyle labelselectstyle-second">
                    
                    <select
                      id="mach_capital"
                      className="second-select"
                      defaultValue="400000"
                      onChange={handlechangeCapital}
                      style={{paddingLeft:'15%'}}
                    >
                      <option disabled={true} defaultValue>
                        Please select an option
                      </option>
                      {capitals.length > 0 && capitals[0] !== undefined
                        ? capitals[0].dropvalues.map((elm, i) => {
                            return <option value={elm} key={i}>{elm}</option>;
                          })
                        : capitalsValues.map((elm, i) => {
                            return <option value={elm}>{elm}</option>;
                          })}
                    </select>
                  </label>
                </div>
                </div>
                <input
                 className='btn-estimate'
                  type="submit"
                  value={t('Home.estimateButton')}
				  onClick={estimateToChart}
                />
              </form>
              <div
                className="result_form second-Contain"
                style={
                  size.width > 767
                    ? {}
                    : { display: estimate ? "none" : "block" }
                }
              >
                <Chart data={data[0]} />
                
                {size.width > 767 ? (
                  <span></span>
                ) : (
                  <input
                    type="submit"
                    value="New estimate"
                    onClick={(e) => {
                      e.preventDefault();
                      setValue("0");
                      setCapitals([
                        {
                          value: "0",
                          dropvalues: ['150.000', '400.000', '1.000.000', '2.000.000'],
                        },
                      ]);
                      setEstimate(true);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="aboutIntro" style={{marginTop:'4vw'}}>
                  <h1 className="aboutIntro-secondTitle" style={{color:'#E56B36', marginBottom:'2.5vw',paddingTop: '0'}}>{t('Home.accept_par')}</h1>
                </div>
           { size.width > 767 ? (
            <div className="estimate_revenues_container payment_collection"  style={{height:'100% !important'}}>
				<h1 style={{marginBottom: '4.1vw'}}>{t('Home.estmate_coats')}</h1>
			<table>
				<thead>
					<tr>
           <th><label>{t('Home.monthly')}<br/>{t('Home.transaction')}</label></th>
           <th><label><span>500’000</span><br/><span className="table-headtab-text2">xaf / {t('Home.month')}</span></label></th>
						<th><label><span>2’500’000</span><br/><span className="table-headtab-text2">xaf / {t('Home.month')}</span></label></th>
						<th><label><span>5’000’000</span><br/><span className="table-headtab-text2">xaf / {t('Home.month')}</span></label></th>
						<th><label><span>10’000’000</span><br/><span className="table-headtab-text2">xaf / {t('Home.month')}</span></label></th>
						<th><label><span>>50’000’000</span><br/><span className="table-headtab-text2">xaf / {t('Home.month')}</span></label></th>
					</tr>
				</thead>  
				<tbody>
					<tr>  
						<td style={{paddingRight: '0%'}}><label class="loyal" >{t('Home.local_payement')}<br/>{t('Home.mobile_money')}</label>
            </td>
						<td><label class="padding_td">2.50%</label></td>
						<td><label class="padding_td">2.25%</label></td>
						<td><label class="padding_td">2.00%</label></td>
						<td><label class="padding_td">1.70%</label></td>
           <td class="last_td" rowspan="2" ><label  class="padding_td"><a href="#" className="contact-us-text">{t('Home.contact')}</a></label></td>
					
					</tr>
					<tr class="first_top">
						<td style={{paddingRight: '0%'}}><label class="loyal" style={{ height: '57px'}}>{t('Home.cost_per_transaction')}</label></td>
						<td colspan="4"><label>20 XAF</label></td>
					</tr>
				</tbody>
			</table>
           <p className="text-mobile-pay">{t('Home.instant')}</p>
				<p className="text-mobile-pay">{t('Home.Settlement')}</p>
			</div>
          ) :  <div className="estimate_revenues_container payment_collection" >
            	<h1 style={{fontSize: '11.250vw !important'}}>{t('Home.costs')}</h1>
		        <div className="mobile-pument-contain">
				<div className="mobile-pay-head">{t('Home.accept_mobile_text')} <br/>{t('Home.local_payement')} from</div>
				<div className="mobile-pay-item">
					<p className="mobile-pay-item-title">{t('Home.mobile')} <br/> {t('Home.Money')}</p> <p className="mobile-pay-item-text"> 2,50%</p>
				</div>
				<div className="mobile-pay-item">
					<p className="mobile-pay-item-title">flat fee per <br/> transaction</p> <p className="mobile-pay-item-text"  >+20 XAF</p></div>	
				</div> 
				<p className="text-mobile-pay"> Instant Settlement in Diool</p>
				<p className="text-mobile-pay text-mobile-pay-second"  > T+2 to your bank </p>
			  </div>}
        </div>
        <div className="aboutIntro" style={{marginTop:'2vw'}}>
           <h1 className="aboutIntro-secondTitle" style={{color:'#E56B36',margin:'auto',fontSize:'3.5vw'}}>{t('Home.combine_par')}</h1>
                </div>
        <FeatureList component="home"/>
      </div>
      <Footer   />
    </div>
  );
};

export default Home;
