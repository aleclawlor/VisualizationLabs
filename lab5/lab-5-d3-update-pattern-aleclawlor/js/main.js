
// SVG drawing area

d3.select('body').style('background', '#333')


let margin = {top: 40, right: 10, bottom: 60, left: 60};

let width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

let svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Scales
let x = d3.scaleBand()
	
    .rangeRound([0, width])
	.paddingInner(0.1);

let y = d3.scaleLinear()
    .range([height, 0]);


// Initialize axes Here

let xAxis = d3.axisBottom()
	.scale(x)
let yAxis = d3.axisLeft()
	.scale(y)

let xAxisGroup = svg.append("g")
	.attr('class', 'x-axis axis')

let yAxisGroup = svg.append("g")
	.attr('class', 'y-axis axis')

// Initialize SVG axes groups here

// Initialize data
let data = null;// global variable

// Load CSV file
d3.csv("data/coffee-house-chains.csv", (d)=>{
	return {
		...d,
		revenue : +d.revenue,
		stores : +d.stores
	}
}).then((allSales)=>{
	data = allSales;
	data.sort(function(a, b){
		if(a.revenue < b.revenue){
			return 1;
		}
		else{
			return -1;
		}
	})
	
	data.sort(function(a, b){
		if(a.stores < b.stores){
			return 1;
		}
		else{
			return -1;
		}
	})
	updateVisualization(data);

});
// Add Event Listener (ranking type)


let selectionVal = d3.select('#ranking-type');
let val;
selectionVal.on("change", function(){
	val = selectionVal.property('value')
	console.log(val)
	updateVisualization()
	})
// Add Event listener (reverse sort order)
let reverseNum = 1;
d3.select("#change-sorting").on("click", function() {
	isReversed = True
	updateVisualization()
});
// Render visualization


function updateVisualization() {
	console.log('updateVisualization');
	console.log(val)
	// Get the selected ranking option

	x.domain(data.map(d=>d.company))
	y.domain([d3.max(data, (d)=>{
		if(val == 'stores'){
			return d.revenue;
		}
		else{
			return d.stores;
		}
	}), 0])

	if(val === 'stores'){
	data.sort(function(a, b){
		if(a.stores > b.stores){
			return 1
		}
		else{
			return -1
		}
		
	})}

	
	else{
	data.sort(function(a, b){
		if (a.revenue > b.revenue){
			return 1
		}
		else{
			return -1
		}
	})}

	

	let bar = svg.selectAll("rect")
		.data(data)

	bar.enter()
		.append('rect')
		.merge(bar)
		.transition()
		.duration(1000)
		.style('fill', '#abcdef')
		.attr('class', 'bar')
		.attr("x", d=>x(d.company))

		.attr("y", height-400)

		.attr("width", x.bandwidth())
		.attr("height", d=>{
			if(val == 'stores'){
				return y(d.revenue)
			}
			else{
				return y(d.stores)
			}
		})

	svg.select('.x-axis')
		.transition()
		.duration(1000)
		.style('transform', 'translate(0, -40px)')
		.call(xAxis)

	svg.select('.y-axis')
		.transition()
		.duration(2000)
		.call(yAxis)

	bar.enter().remove()
	isReversed = False
}