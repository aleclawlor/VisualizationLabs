
// The function is called every time when an order comes in or an order gets processed
// The current order queue is stored in the variable 'orders'

let svg = d3.select('#chart-area').append('svg')
			.attr('width', 800)
			.attr('height', 200)

d3.select('body').style('background', '#333')

function updateChart(data){
	let text = svg.append('text').text(`Orders: ${data.length}`)
		.attr('x', 30)
		.attr('y', 200)
	
	let circle = svg.selectAll('circle')
		.data(data)
				
	circle.enter()
		.append("circle")
		.merge(circle)
		.attr('r', 20)
		.attr('cx', (d, index)=>index*50 + 50)
		.attr('cy', 80)
		.attr('fill', (d)=>{
			if(d.product === "coffee"){
				return '#abcdef';
			}
			else{
				return '#fff';
			}
		})

	circle.exit().remove();

}