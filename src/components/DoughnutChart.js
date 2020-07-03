
import React from "react";
import * as d3 from "d3";

class Arc extends React.Component {
  constructor(props) {
    super(props);
    this.arc = d3.arc();
  }
  componentDidMount() {
    d3.select(this.refs.arc)
      .datum(this.props.data)
      .attr("d", null)
      .transition()
      .delay(() => {
        return this.props.i * 500;
      })
      .duration(500)
      .attrTween("d", d => {
        var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
        return t => {
          d.endAngle = i(t);
          return this.arc(d);
        };
      });
  }

  componentWillMount() {
    this.updateD3(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.updateD3(newProps);
  }

  updateD3(newProps) {
    this.arc.innerRadius(newProps.innerRadius);
    this.arc.outerRadius(newProps.outerRadius);
  }
  render() {
    const arc = this.arc(this.props.data);
    return <path ref="arc" d={arc} style={{ fill: this.props.color }} />;
  }
}

class LabeledArc extends Arc {
  componentDidMount() {
    super.componentDidMount();
    d3.select(this.refs.text)
      .transition()
      .delay(() => {
        return this.props.i * 500 + 500;
      })
      .duration(300)
      .attrTween("fill-opacity", d => {
        return t => {
          return t * 0.75;
        };
      });
  }
  render() {
    let [labelX, labelY] = this.arc.centroid(this.props.data),
      labelTranslate = `translate(${labelX}, ${labelY})`;
    return (
      <g>
        {super.render()}
        {/* <text
          ref="text"
          transform={labelTranslate}
          textAnchor="middle"
          fill="#ffffff"
          fillOpacity="0"
        >
          {this.props.data.data.value}
        </text> */}
      </g>
    );
  }
}

class Piechart extends React.Component {
  constructor() {
    super();
    this.pie = d3
      .pie()
      .sort(null)
      .value(d => d.value);
    this.colors = [
      "#CBE2F7",
      "#8AB0DD",
      "#3C67A9",
      "#191745"
    ];
  }

  arcGenerator(d, i) {
    return (
      <LabeledArc
        key={i}
        i={i}
        data={d}
        innerRadius={this.props.innerRadius}
        outerRadius={this.props.outerRadius}
        color={this.colors[i]}
      />
    );
  }

  render() {
    let pie = this.pie(this.props.data),
      translate = `translate(${this.props.x}, ${this.props.y})`;
    const width = this.props.x * 2;
    const height = this.props.y * 2;
    return (
      <svg width="90%" height="90%" viewBox={`0 0 ${width} ${height}`}>
        <g transform={translate}>
          {pie.map((d, i) => this.arcGenerator(d, i))}
        </g>
      </svg>
    );
  }
}
class DoughnutChart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillReceiveProps=(nextProps)=>{
    
    if(nextProps===undefined){
     this.setState({
       data: [{ value: 10}, { value: 40 }, { value: 60 }, { value: 80 }]
     })
    }else{
      this.setState({
        data: [{ value: nextProps.data.recharge }, { value:  nextProps.data.paiment }, { value: nextProps.data.services }, { value: nextProps.data.retrait }]
      })
    }
  }
  render() {
    const { data } = this.props;
//console.log(data);

    return (
      <div className="gabarit">
        <Piechart
          x={100}
          y={100}
          outerRadius={100}
          innerRadius={78}
          data={data}
        />
        <img className="chart-icon"  src={require("../images/static/maquette_1.png")} alt="messenger-icon"/>
      </div>
    );
  }
}

export default DoughnutChart;
