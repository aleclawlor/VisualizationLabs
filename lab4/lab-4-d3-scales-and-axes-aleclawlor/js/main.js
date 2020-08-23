// SVG Size
let width = 700,
	height = 500;

// Load CSV file
d3.csv("data/wealth-health-2014.csv", (row)=>{
	return{
		...row,
		Income:+row.Income,
		LifeExpectancy:+row.LifeExpectancy		
	}

})
.then(data=>{
		
		let xExtent = d3.extent(data, (d)=> d.Income)
		let yExtent = d3.extent(data, (d)=> d.LifeExpectancy)

		console.log(xExtent, yExtent)

		let padding = 30;

		let xScale = d3.scaleLinear()
					.domain(xExtent)
					.range([padding, width - padding])

		let yScale = d3.scaleLinear()	// linear mapping
					.domain(yExtent)
					.range([height-padding, padding])

		let xAxis = d3.axisBottom()
					.scale(xScale)

		let yAxis = d3.axisLeft()
					.scale(yScale)
					
		
		let svg = d3.select("#chart-area")
					.append('svg')
					.attr('width', width)
					.attr('height', height);
		
		let x = svg.append('g')
					.attr('class', 'axis x-axis')
					.attr("transform", "translate(0," + (height - padding) + ")")
					.call(xAxis)
		
		x.append("text")
					.attr('x', '200')
					.attr('y', '200')

		let y = svg.append('g')
					.attr('class', 'axis y-axis')
					// bottom line puts y-axis on rightside
					// .attr("transform", "translate("+(width-padding)+", 0)")
					.attr('transform', 'translate('+padding+', 0)')
					.call(yAxis);
	
		// let group = svg.append("g")
		// 			.attr('transform', 'translate(50, 200)');

		// let circle = group.append("circle")
		// 			.attr('r', 4)
		// 			.attr('fill', 'blue')
		// 			.attr('cx', '200')
		// 			.attr('cy', '200')

		svg.selectAll("circle")
					.data(data)
					.enter()
					.append("circle")
					.attr('r', '5')
					.attr('cx', (d)=>xScale(d.Income))
					.attr('cy', (d)=>yScale(d.LifeExpectancy))
					.attr('fill', '#abcdef')
					.attr('stroke', 'black')
		
		// Analyze the dataset in the web console
		console.log(xScale(5000))
		console.log(yScale(68))
		// 	
			
});


