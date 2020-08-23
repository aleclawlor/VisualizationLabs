d3.csv("data/cities.csv", function(row){
    return{
        ...row,
        population: parseInt(row.population)
    }
}).then(function(data){

    // filtering data
    let filtered = data.filter(d=>d.eu==="true");
    console.log(filtered);

    //styling HTML and creating SVG element
    d3.select("body").style("background", "#333")
    d3.select("body").append("h1").text(`Numer of Cities: ${filtered.length}`)
    
    let svg = d3.select("body").append("svg")
            .attr("width", "700")
            .attr("height", "550")

    svg.selectAll("circle")
            .data(filtered)
            .enter()
            .append("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => {
                if(d.population < 1000000){
                    return "4";
                }
                else{
                    return "8";
                }
            })
            .attr("fill", "#5837FF")
            .attr("stroke", "black")
    svg.selectAll("text")
                .data(filtered)
                .enter()
                .append("text")
                .classed("city-label", true)
                .on("click", function(d){
                    console.log("Population: " + d.population)
                })
                .attr("x", d => d.x)
                .attr("y", d=> d.y - 14)
                .attr("fill", d => {
                    if (d.population < 1000000){
                        return "#333"
                    }
                })
                .text((d) => {
                    return d.city
                })
            })