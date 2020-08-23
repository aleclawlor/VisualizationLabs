/* main JS file */

// an example of using D3 for dynamicity

d3.select("body").append("p").text("Hello World");
d3.select("body").style("background-color", "#0095C8")

let states = ["Conneticut", "Maine", "Massachusetts", "New Hampshire",
"Rhode Island", "Vermont"]

let p = d3.select("body").selectAll("p")
        .data(states)
        .enter()
        .append("p")
        .text((d)=>{return d;})
        .attr("class", "custom-paragraph")
        .style("font-weight", (d)=>{
            if(d === "Massachusetts"){
                return "bold";
            }
            else{
                return "normal";
            }
        })

p.style("color", "#000")

// using d3 and SVG together

let numericData = [1, 2, 4, 8, 16,];

// add svg element
let svg = d3.select("body").append("svg")
            .attr("width", 300)
            .attr("height", 50)

svg.selectAll("rect")
        .data(numericData)
        .enter()
        .append("rect")
        .attr("fill", "red")
        .attr("width", "50")
        .attr("height", 50)
        .attr("y", 0)
        .attr("x", (d, index)=>{
            return (index*60)
        })