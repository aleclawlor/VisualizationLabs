
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

dataFiltering();

function dataFiltering() {

	let attractions = attractionData;

	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

	 attractions.sort(function(a, b){
		 return b.Visitors - a.Visitors;
	 });
	 
	 let topAttractions = attractions.filter(function(value, index){
		 return index < 5;
	 });
	 console.log(topAttractions);


	 renderBarChart(topAttractions);

	 dataManipulation = function(){
		let selectBox = document.getElementById("attraction-category");
		let selectedValue = selectBox.options[selectBox.selectedIndex].value;
		if (selectedValue === "all"){
			renderBarChart(topAttractions);
			// console.log(topAttractions);
		}
		else{
			renderBarChart(topAttractions);
			let attractions = attractionData;
			let newAttractions = attractions.filter(function(a, b){
				return a.Category === selectedValue;
			})
			newAttractions = newAttractions.filter(function(value, index){
				return index < 5;
			})
			console.log(newAttractions);
			renderBarChart(newAttractions);
			
		}
	}

}

