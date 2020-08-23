document.querySelector(".select-control").addEventListener("change", updateBarChart);

function updateBarChart(){
  let column = document.querySelector(".select-control").value;
  let spec = {
    "title": "Coffee House Chains",
    "data" : {"url": "data/coffee-house-chains.csv"},
    "width": 500,
    "mark": "bar",
    "encoding":
    {
      "x": {"field": "company", 
            "type": "nominal",
            "sort": "-y"},
      "y":{"field":column,
            "type":"quantitative"},
    }
  };
  vegaEmbed('#chart-area', spec);
}

updateBarChart();