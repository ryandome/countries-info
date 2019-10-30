d3.json("https://restcountries.eu/rest/v2/all")

var countryPromise=d3.json("https://restcountries.eu/rest/v2/all");
countryPromise.then(
function(data)
    {
        //cImage(data);
        cList(data);
        reverseSort(data.reverse())
        //cTable(data);
        console.log("works",data);
    },
    function(err)
    {
        console.log("error",data);
    })


var cList = function(data)
{
    d3.select("tbody").selectAll("#Gtable")
    .data(data)
    .enter()
    .append("tr").attr("id","Gtable")
    .append("td")
    .attr("id","countryNames")
    .text(function(d){
        return d.name
    })
    
    .append("td")
    .attr("id","flags")
    .append("img")
    .attr("src",function(d){return d.flag})
    .attr("height",100)
    .attr("width",200)
    .on("click",function(country)
       {
        cTable(country);
    })
}


var cTable = function(country)
{
    d3.selectAll("#Gtable")
        .append("td")
        .text(function(country){
        return country.capital
    })
    
    d3.selectAll("#Gtable").append("td")
        .text(function(country){
        return country.area
    })
    
     d3.selectAll("#Gtable").append("td")
        .text(function(d){
        return d.population
         
	 }).style("color", function(d){var pop = d.population
     if(pop>200000) {
         return "red"
     }
                                   else { return "green"}
     })
    
    
d3.selectAll("#Gtable").append("td")
        .text(function(d){
        return d.nativeName
    })
}

var reverseSort = function(country)
{
    d3.select("#reverse")
    .on("click", function(country)
       {
        cList(country)
    })
}




/*var cImage = function(data)
{
    d3.select("#countryNames").append("div").attr("id","flags").append("svg").attr("src",function(d){return d.flag});
   
    
    
    
    
}*/