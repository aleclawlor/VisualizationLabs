// JS array manipulation




let cities = ["Vienna", "Paris", "London", "London"]

//pass a function to cities.filter()
let filteredCities = cities.filter(checkCity);

function checkCity(value){
    return value != "London";
}

console.log(filteredCities);

// filter example 2 -- getting all numbers >= 10 and have indices > 3

let numericData = [1, 20, 3, 40, 5, 60, 7, 80];

// use an anonymous function in numericData.filter
// the anonymous function takes the array element's current value and index as parmas.

let filteredNumericData = numericData.filter(function(value, index){
    return (value >= 10) && (index > 3);
})

console.log(filteredNumericData)




// sorting a list

let products = [
    {name: "laptop", price: 800},
    {name: "phone", price: 200},
    {name: "tv", price: 1200}
];

// sorts ascending by the 'price' property
products.sort(function(a, b){
    return a.price-b.price;
});

// sorts descending by the 'price' property
products.sort(function(a,b){
    return b.price - a.price;
});



// using the map() function
// map creates a new array with the results of calling a provided function 
// on every element of the original array

// ex. 1 - calculating sqrt

let numericData2 = [1, 4, 9];
let roots = numericData2.map(Math.sqrt);

console.log(roots);

// ex. 2 - doubling the price

let products2 = [
    {name: "laptop", price: 800},
    {name: "phone", price: 200},
    {name: "tv", price: 1200}
];

let expensiveProducts = products2.map(doublePrice);

function doublePrice(elem){
    elem.price = elem.price * 2;
    return elem;
}

console.log(expensiveProducts);