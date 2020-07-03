import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import Chart from "../components/Chart";
import "./Home.css";

const Home = (props) => {
  const InitialData = [
    {
      shop: "0",
      capital: 50000,
      actifDay: 15,
      transaction: 207,
      revenue: 16350,
      recharge: 16350,
      retrait: 0,
      paiment: 0,
      services: 0,
    },
    {
      shop: "0",
      capital: 150000,
      actifDay: 18,
      transaction: 269,
      revenue: 36800,
      recharge: 20300,
      retrait: 10050,
      paiment: 6450,
      services: 0,
    },
    {
      shop: "0",
      capital: 400000,
      actifDay: 20,
      transaction: 400,
      revenue: 81800,
      recharge: 21175,
      retrait: 32915,
      paiment: 8950,
      services: 18760,
    },
    {
      shop: "0",
      capital: 1000000,
      actifDay: 24,
      transaction: 524,
      revenue: 148700,
      recharge: 23925,
      retrait: 83700,
      paiment: 13575,
      services: 27500,
    },
    {
      shop: "0",
      capital: 2000000,
      actifDay: 24,
      transaction: 550,
      revenue: 186600,
      recharge: 23430,
      retrait: 118095,
      paiment: 15575,
      services: 29500,
    },
    {
      shop: "1",
      capital: 150000,
      actifDay: 18,
      transaction: 220,
      revenue: 70300,
      recharge: 54900,
      retrait: 2500,
      paiment: 12900,
      services: 0,
    },
    {
      shop: "1",
      capital: 400000,
      actifDay: 20,
      transaction: 420,
      revenue: 225000,
      recharge: 186850,
      retrait: 20250,
      paiment: 17900,
      services: 0,
    },
    {
      shop: "1",
      capital: 1000000,
      actifDay: 24,
      transaction: 585,
      revenue: 360000,
      recharge: 256750,
      retrait: 76000,
      paiment: 27250,
      services: 0,
    },
    {
      shop: "2",
      capital: 150000,
      actifDay: 18,
      transaction: 225,
      revenue: 74150,
      recharge: 61550,
      retrait: 2600,
      paiment: 10000,
      services: 0,
    },
    {
      shop: "2",
      capital: 400000,
      actifDay: 20,
      transaction: 385,
      revenue: 205000,
      recharge: 172125,
      retrait: 17875,
      paiment: 15000,
      services: 0,
    },
    {
      shop: "2",
      capital: 1000000,
      actifDay: 24,
      transaction: 623,
      revenue: 388200,
      recharge: 283000,
      retrait: 80200,
      paiment: 25000,
      services: 0,
    },
    {
      shop: "3",
      capital: 500000,
      actifDay: 20,
      transaction: 373,
      revenue: 57800,
      recharge: 14485,
      retrait: 28315,
      paiment: 15000,
      services: 0,
    },
    {
      shop: "3",
      capital: 1250000,
      actifDay: 24,
      transaction: 683,
      revenue: 146375,
      recharge: 9060,
      retrait: 120315,
      paiment: 17000,
      services: 0,
    },
    {
      shop: "3",
      capital: 2500000,
      actifDay: 24,
      transaction: 709,
      revenue: 189182,
      recharge: 8930,
      retrait: 160252,
      paiment: 20000,
      services: 0,
    },
    {
      shop: "3",
      capital: 3000000,
      actifDay: 24,
      transaction: 713,
      revenue: 224318,
      recharge: 4584,
      retrait: 194734,
      paiment: 25000,
      services: 0,
    },
  ];

  const [estimate, setEstimate] = useState(true);
  const [value, setValue] = useState("Please select an option ");
  const [capitals, setCapitals] = useState([
    { value: "0", dropvalues: [50000, 150000, 400000, 1000000, 2000000] },
  ]);
  const [capitalsvalue, setCapitalsvalue] = useState();
  const [data, setData] = useState([]);
  const capitalsValues = [
    { value: "0", dropvalues: [50000, 150000, 400000, 1000000, 2000000] },
    { value: "1", dropvalues: [150000, 400000, 1000000] },
    { value: "2", dropvalues: [150000, 400000, 1000000] },
    { value: "3", dropvalues: [500000, 1250000, 2500000, 3000000] },
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
      setValue("Please select an option ");
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

  useEffect(() => {
	
	
  }, []); // Empty array ensures that effect is only run on mount and unmount


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
    // console.log("capitalsValues", capitalsvalue);
    // console.log("value", value);
    e.preventDefault();
    setData(
      InitialData.filter(
        (elm) => elm.shop == value && elm.capital == capitalsvalue
      )
    );
    setEstimate(false);
  };
console.log(size.width)
  return (
    <div className="Home">
      <Header />
      <div class="container-page">
        <Introduction />

        <div class="estimate_revenues">
          {props && props.location && props.location.query && props.location.query.payment ==="revenue"
 ? (
            <div className="estimate_revenues_container">
              <h1>Estimate your commissions revenues</h1>
              <form
                action=""
                style={
                  size.width > 767
                    ? {}
                    : { display: estimate ? "block" : "none" }
                }
              >
                <h2>What shop do you have ?</h2>
                <div class="select_activity_sector">
                  <label class="labelselectstyle">
                    <select
                      id="what_shop"
                      defaultValue="Please select an option"
                      onChange={handlechangeShop}
                    >
                      <option disabled={true} defaultValue>
                        Please select an option
                      </option>
                      <option value="0">Kiosque de Rue</option>
                      <option value="1">Hotel, Bar, Restaurant</option>
                      <option value="2">Epicerie, Commerce Général</option>
                      <option value="3">Bureau de Transferts d'Argent</option>
                    </select>
                  </label>
                </div>
                <h2>How much capital will you use ?</h2>
                <div class="select_activity_sector">
                  <label class="labelselectstyle">
                    <select
                      id="mach_capital"
                      defaultValue="Please select an option"
                      onChange={handlechangeCapital}
                    >
                      <option disabled={true} defaultValue>
                        Please select an option
                      </option>
                      {capitals.length > 0 && capitals[0] !== undefined
                        ? capitals[0].dropvalues.map((elm, i) => {
                            return <option value={elm}>{elm}</option>;
                          })
                        : capitalsValues.map((elm, i) => {
                            return <option value={elm}>{elm}</option>;
                          })}
                    </select>
                  </label>
                </div>
                <input
                  type="submit"
                  value="Estimate"
				  onClick={estimateToChart}
				  style={{marginTop:"3vw"}}
                />
              </form>
              <div
                class="result_form second-Contain"
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
                          dropvalues: [50000, 150000, 400000, 1000000, 2000000],
                        },
                      ]);
                      setEstimate(true);
                    }}
                  />
                )}
              </div>
            </div>
          ) : size.width > 767 ? (
            <div className="estimate_revenues_container payment_collection" >
				<h1>Estimate your cost of payment collection</h1>
			<table>
				<thead>
					<tr>
						<th><label>Monthly<br/>Transactions</label></th>
						<th><label><span>500’000</span><br/>xaf / month</label></th>
						<th><label><span>2’500’000</span><br/>xaf / month</label></th>
						<th><label><span>5’000’000</span><br/>xaf / month</label></th>
						<th><label><span>10’000’000</span><br/>xaf / month</label></th>
						<th><label><span>>50’000’000</span><br/>xaf / month</label></th>
					</tr>
				</thead>  
				<tbody>
					<tr>  
						<td><label class="loyal">Local payments<br/>in mobile money</label></td>
						<td><label class="padding_td">2.50%</label></td>
						<td><label class="padding_td">2,25%</label></td>
						<td><label class="padding_td">2,00%</label></td>
						<td><label class="padding_td">1.70%</label></td>
						<td class="last_td" rowspan="2" ><label  class="padding_td"><a href="">Contact Us</a></label></td>
					
					</tr>
					<tr class="first_top">
						<td><label>Cost per transaction</label></td>
						<td colspan="4"><label>20 XAF</label></td>
					</tr>
				</tbody>
			</table>
			<p className="text-mobile-pay"> Instant Settlement in Diool</p>
				<p className="text-mobile-pay">T+2 Settlement to your Bank</p>
			</div>
          ) :  <div className="estimate_revenues_container payment_collection" >
		        <div className="mobile-pument-contain">
				<div className="mobile-pay-head">Monthly <br/>Transactions</div>
				<div className="mobile-pay-item">
					<p className="mobile-pay-item-title">mobile <br/> money</p> <p className="mobile-pay-item-text">From 2,50%</p>
				</div>
				<div className="mobile-pay-item">
					<p className="mobile-pay-item-title">Cost per  <br/> transaction</p> <p className="mobile-pay-item-text" style={{justifyContent:"center"}} >+20 XAF</p></div>	
				</div> 
				<p className="text-mobile-pay"> Instant Settlement in Diool</p>
				<p className="text-mobile-pay">T+2 Settlement to your Bank</p>
			  </div>}
        </div>
        <FeatureList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
