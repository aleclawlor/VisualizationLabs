d3.select("body").style("background", "#333");

let sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];

let svg = d3.select("body").append("svg")
        .attr("width", "1000")
        .attr("height", "300")

svg.selectAll("circle")
        .data(sandwiches)
        .enter()
        .append("circle")
        .attr("cy", "100")
        .attr("cx", (d, index) => {
            return 150 +  3*(index*50);
        })
        .attr("r", (d) => {
            if(d.size == "large"){
                return "50";
            }
            else{
                return "25";
            }
        })
        .attr("fill", (d) => {
            if(d.price < 7.00){
                return "lightblue";
            }
            else{
                return "orange";
            }
        })
        .attr("stroke", "#000")

// loading data from a CSV file
d3.csv("data/sandwiches.csv", function(row) {
    // do type conversion
    return {
        ...row,
        price:parseFloat(row.price)// convert from string ("7.95") to float (7.95)
    }    
}).then(function(data){        
    console.log("Data loading complete. Work with dataset.");
    // filter
    let filtered =  data.filter(d=>d.price>7.0);
    console.log(filtered);
});
console.log("Do something else, without the data");