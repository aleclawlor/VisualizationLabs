
let width = 1000,
height = 600;

d3.select('body').style('background', '#abcdef')

let svg = d3.select("#chart-area").append("svg")
.attr("width", width)
.attr("height", height);

// Load data

Promise.all([d3.json('./data/airports.json'),
			 d3.json('./data/world-110m.json')
]).then(data =>{
	console.log(data)
	let airportData = data[0] 
	let worldData = data[1]

	let projection = d3.geoMercator()
	.translate([width / 2, height / 2])
	.center([0, 0])

    let path = d3.geoPath()
	.projection(projection)

	let world = topojson.feature(worldData, worldData.objects.countries).features
	
	svg.selectAll('path')
		.data(world)
		.enter()
		.append('path')
		.attr('d', path)
		.attr('fill', '#123456')	

	// updating the airport data

	// let force = d3.forceSimulation(airportData.nodes)
    // .force("charge", d3.forceManyBody().strength(-10))
    // .force('link', d3.forceLink(airportData.links).distance(100))
    // .force('center', d3.forceCenter().x(width/2).y(width/2))

	console.log(airportData.links)
  	let link = svg.selectAll('link')
    .data(airportData.links)
    .enter().append('line')
    .attr('class', 'link')
	.attr('stroke', '#FFD721')
	.attr('x1', function(d){
		let source = d.source
		return projection([airportData.nodes[source].longitude, airportData.nodes[source].latitude])[0]
	})
	.attr('y1', function(d){
		let source = d.source
		return projection([airportData.nodes[source].longitude, airportData.nodes[source].latitude])[1]
	})
	.attr('x2', function(d){
		let target = d.target
		return projection([airportData.nodes[target].longitude, airportData.nodes[target].latitude])[0]
	})
	.attr('y2', function(d){
		let target = d.target
		return projection([airportData.nodes[target].longitude, airportData.nodes[target].latitude])[1]
	})
	.attr('color', '#123456')

	let node = svg.selectAll('.node')
		.data(airportData.nodes)
		.enter().append('circle')
		.attr('class', 'node')
		.attr('r', 5)
		.attr('fill', (d)=>{
			if(d.country === "United States"){
			return 'lightblue'
			}
			else{
			return 'orange'
			}
		})
		.attr('cx', function(d){return d.x})
		.attr('cy', function(d){return d.y})
		.attr("transform", function(d) {
			return "translate(" + projection([d.longitude, d.latitude]) + ")";
		})
      

  // 5) LISTEN TO THE 'TICK' EVENT AND UPDATE THE X/Y COORDINATES FOR ALL ELEMENTS))

	node.on('hover', function(d){
	d.append("title")
	.text(d=>d.name)
	})

	console.log()
	console.log(airportData)

	// force.on("tick", function(){
	// 	node
		// .attr('cx', function(d){return d.longitude})
		// .attr('cy', function(d){return d.latitude})
		// .attr("transform", function(d) {
		// 	return "translate(" + projection([d.longitude, d.latitude]) + ")";
		// })
	// 	.append("title")
	// 	.text(d=>d.name)
	// })
});

