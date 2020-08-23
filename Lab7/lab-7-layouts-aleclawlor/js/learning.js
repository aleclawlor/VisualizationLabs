let data = [45, 30, 10]
let pie = d3.pie()

let width = 300,
    height = 300

//position pie chart in middle pof SVG area
let svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")")

let color = d3.scaleOrdinal(d3.schemeCategory10)

let outerRad = width/2
let innerRad = 0     // relevant for donut charts

let arc = d3.arc()
    .innerRadius(innerRad)
    .outerRadius(outerRad)

let g = svg.selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')

// using path generator to draw the arcs

g.append('path')
    .attr('d', arc)
    .style('fill', (d, index)=>color(index))

g.append('text')
    .attr('transform', function(d){return "translate(" + arc.centroid(d) + ")"})
    .attr('text-anchor', 'middle')
    .attr('fill', '#fff')
    .text(function(d){return d.value})