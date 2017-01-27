import React from 'react';
import ReactDOM from 'react-dom';

var Axis=React.createClass({
    propTypes: {
        h:React.PropTypes.number,
        axis:React.PropTypes.func,
        axisType:React.PropTypes.oneOf(['x','y'])

    },

    componentDidUpdate: function () { this.renderAxis(); },
    componentDidMount: function () { this.renderAxis(); },
    renderAxis: function () {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);

    },
    render: function () {

        var translate = "translate(0,"+(this.props.h)+")";

        return (
            <g className="axis" transform={this.props.axisType=='x'?translate:""} >
            </g>
        );
    }

});

var Grid=React.createClass({
    propTypes: {
        h:React.PropTypes.number,
        grid:React.PropTypes.func,
        gridType:React.PropTypes.oneOf(['x','y'])
    },

    componentDidUpdate: function () { this.renderGrid(); },
    componentDidMount: function () { this.renderGrid(); },
    renderGrid: function () {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.grid);

    },
    render: function () {
        var translate = "translate(0,"+(this.props.h)+")";
        return (
            <g className="y-grid" transform={this.props.gridType=='x'?translate:""}>
            </g>
        );
    }

});

class BarChart extends React.Component {
	constructor(props){
        super(props);
        this.state={
			width:350,
			height:700
		};
    }
	render() {
		var data= [
            { month:'01 Dec', value:10000 },
            { month:'02 Dec', value:5000 },
            { month:'03 Dec', value:13000 },
            { month:'04 Dec', value:20000 },
            { month:'05 Dec', value:10000 },
            { month:'06 Dec', value:15000 },
            { month:'07 Dec', value:28000 }
        ];
        var margin={top:0,right:5,bottom:5,left:45},
        w=this.state.width-(margin.left+margin.right),
        h=this.props.height-(margin.top+margin.bottom);

        var transform='translate('+margin.left+','+(-15)+')';

        var x=d3.scale.ordinal()
            .rangeRoundBands([0,this.state.width],.35)
            .domain(data.map(function(d){
                return d.month;
            }))
		
		
        var y=d3.scale.linear()
            .range([this.props.height,0])
            .domain([0,d3.max(data, function(d) { return d.value;})])
		
		var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .tickFormat(d3.format("s"))
            .ticks(5);

       var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .ticks(7);

        var yGrid = d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(5)
            .tickSize(-w, 0, 0)
            .tickFormat("");

        var rectForeground=(data).map(function(d, i) {

            return (
				<g>
                <rect fill="#5cbae6" key={i}
                      x={x(d.month)} y={y(d.value)} className="shadow"
                      height={h-y(d.value)}
                      width="30"/>
					</g>
            	);
        });

        return(
            <div>
                <svg id={this.props.chartId} width={this.state.width+ 300} height={this.props.height}>
                    <g transform={transform}>
						 <Grid h={h} grid={yGrid} gridType="y"/>
                        <Axis h={h} axis={yAxis} axisType="y" />
                        <Axis h={h} axis={xAxis} axisType="x"/>
                        {rectForeground}
                    </g>
                </svg>
            </div>
            );
		
	}
};

BarChart.propTypes ={
};
BarChart.defaultProps ={
	width: 350,
	height: 250,
    chartId: 'v_chart'
};

export default BarChart;
// import React from 'react';
// import BarChart from 'react-bar-chart';


// const data = [
// //   {text: 'Man', value: 500}, 
// //   {text: 'Woman', value: 300} 
//   { text:'01 Dec', value:10000 },
//             { text:'02 Dec', value:22000 },
//             { text:'03 Dec', value:13000 },
//             { text:'04 Dec', value:18000 },
//             { text:'05 Dec', value:10000 },
//             { text:'06 Dec', value:15000 },
//             { text:'07 Dec', value:23000 }
// ];


// const margin = {top: 20, right: 20, bottom: 30, left: 40};

// const Example = React.createClass({
//   getInitialState() {
//     return { width: 500 };
//   },

//   componentDidMount: () => {
//     window.onresize = () => {
//      this.setState({width: this.refs.root.offsetWidth}); 
//     };
//   },

//   handleBarClick(element, id){ 
//     console.log(`The bin ${element.text} with id ${id} was clicked`);
//   },

//   render() {
//     return (
//         <div ref='root'>
//             <div style={{width: '50%'}}> 
//                 <BarChart
//                   width={this.state.width}
//                   height={500}
//                   margin={margin}
//                   data={data}
//                   onBarClick={this.handleBarClick}/>
//             </div>
//         </div>
//     );
//   }
// });

// export default Example;