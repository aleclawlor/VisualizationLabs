
let width = 400,
    height = 400;

let svg = d3.select("#chart-area").append("svg")
    .attr("width", width)
    .attr("height", height);


// 1) INITIALIZE FORCE-LAYOUT

// Load data
d3.json("data/airports.json")
.then(function(data) {

  console.log(data)

  // 2a) DEFINE 'NODES' AND 'EDGES'
  let force = d3.forceSimulation(data.nodes)
    .force("charge", d3.forceManyBody().strength(-10))
    .force('link', d3.forceLink(data.links).distance(30))
    .force('center', d3.forceCenter().x(width/2).y(width/2))
  // 2b) START RUNNING THE SIMULATION
  // 3) DRAW THE LINKS (SVG LINE)

  let link = svg.selectAll('link')
    .data(data.links)
    .enter().append('line')
    .attr('class', 'link')
    .attr('stroke', '#333')

  // 4) DRAW THE NODES (SVG CIRCLE)
  let node = svg.selectAll('.node')
      .data(data.nodes)
      .enter().append('circle')
      .attr('class', 'node')
      .attr('r', 5)
      .attr('fill', (d)=>{
        if(d.country === "United States"){
          return 'blue'
        }
        else{
          return 'orange'
        }
      })
      

  // 5) LISTEN TO THE 'TICK' EVENT AND UPDATE THE X/Y COORDINATES FOR ALL ELEMENTS))

node.on('hover', function(d){
  d.append("title")
  .text(d=>d.name)
})

  force.on("tick", function(){
    node
      .attr('cx', function(d){return d.latitude})
      .attr('cy', function(d){return d})
      .append("title")
      .text(d=>d.name)
    link
      .attr('x1', function(d){return d.source.x})
      .attr('y1', function(d){return d.source.y})
      .attr('x2', function(d){return d.target.x})
      .attr('y2', function(d){return d.target.y})
  })

});