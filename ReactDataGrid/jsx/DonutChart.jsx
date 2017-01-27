 import React from 'react';


var D3Legend = React.createClass({

  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    colors: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired,
  },

  render: function() {
    var color = this.props.colors;
    var data = this.props.data;
    var elements = data.map(function(item, i){
      return (
        <LegendElement color={color} xpos={i*120} ypos="0" data={item.name} key={i} ikey={i}/>
      )
    })

    return(
        <svg className="legend" width={this.props.width} height={this.props.height}>{elements}</svg>
    );
  }
});



var LegendElement = React.createClass({
  render: function() {
    var position =  "translate(" + this.props.xpos + "," + this.props.ypos + ")";
    return (
      <g transform={position}>
        <rect width="18" height="18" fill={this.props.color[this.props.ikey]}></rect>
        <text x="24" y="9" dy=".35em">{this.props.data}</text>
      </g>
    );
  }
});

var Sector = React.createClass({
  getInitialState: function() {
    return {text: '', opacity:'arc'};
  },
  render: function() {
    var outerRadius = this.props.width/2.2;
    var innerRadius = this.props.width/5;
    var arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);
    var data = this.props.data;
    var center = "translate(" + arc.centroid(data) + ")";
    var percentCenter = "translate(0,3)";
    var color = this.props.colors;
    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.onClick}>
        <path className={this.state.opacity} fill={color[this.props.ikey]} d={arc(this.props.data)}></path>
      </g>
    );
  }
});

var DataSeries = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    color: React.PropTypes.array,
    data: React.PropTypes.array.isRequired,
  },
  render: function() {
    var color = this.props.colors;
    var data = this.props.data;
    var width = this.props.width;
    var height = this.props.height;
    var pie = d3.layout.pie();
    var result = data.map(function(item){
      return item.count;
    })
    var names = data.map(function(item){
      return item.name;
    })
    var sum = result.reduce(function(memo, num){ return memo + num; }, 0);
    var position = "translate(" + (width)/2 + "," + (height)/2 + ")";
    console.log("res",result);
    var bars = (pie(result)).map(function(point, i) {
      console.log("point ",point);
      console.log("colors ",names[i]);
      return (
        <Sector data={point} ikey={i} key={i} name={names[i]} colors={color} total=  
        {sum} width={width} height={height}/>
      )
    });

    return (
        <g transform={position}>{bars}</g>
    );
  }
});

var D3Chart = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    children: React.PropTypes.node,
  },
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>        
      {this.props.children}</svg>
    );
  }
});

var D3PieChart = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      width: 200,
      height: 200,
    };
  },

  render: function() {
    var colors = ['#B6D957','#FAC364',]
    return (
      <div>
        <D3Chart width={this.props.width} height={this.props.height}>
              <DataSeries data={this.props.data} colors={colors} width=
                {this.props.width} height={this.props.height}/>
        </D3Chart>
        <D3Legend data={this.props.data} colors={colors} width={this.props.width} height={this.props.height-170} />
      </div>
    );
  }
});

var data = [
    {name: "Apples", count: 10},
    {name: "Oranges", count: 20},
    {name: "Bananas", count: 5},
    {name: "Blueberries", count: 42},
    {name: "mangoes ", count: 29}  
];

export default D3PieChart

