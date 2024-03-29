d3.json("https://restcountries.eu/rest/v2/all")

var countryPromise=d3.json("https://restcountries.eu/rest/v2/all");
countryPromise.then(
function(data)
    {
        //cImage(data);
        cList(data);
        sortTable(data);
        sortpopAsc(data);
        sortarAsc(data);
        sortardes(data);
        //reverseSort(data.reverse())
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
        d3.selectAll(".tbr").remove();
        cTable(country);
    })
}


var cTable = function(country)
{
    d3.selectAll("#Gtable")
        .append("td").attr("class","tbr")
        .text(function(country){
        return country.capital
    })
    
    d3.selectAll("#Gtable").append("td").attr("class","tbr")
        .text(function(country){
        return country.area + " sq km"
    })
    
     d3.selectAll("#Gtable").append("td").attr("class","tbr")
        .text(function(d){
        return d.population
         
	 })
    
d3.selectAll("#Gtable").append("td").attr("class","tbr")
        .text(function(d){
        return d.nativeName
    })
    d3.selectAll("#Gtable").append("td").attr("class","tbr").text(function(d)
    {
    var popdense = d.population / d.area 
    return popdense + " people/sq km"
    }
).style("background-color", function(d)
{var popdense = d.population / d.area
        if( popdense > 57){ return "#FF9494" 
    }
 else { return "white" }
        })
}



var sortTable = function(data)
{
    d3.select("#reverse").on("click",function()
    {
        d3.selectAll("#Gtable").remove();
        
        data.sort(function(a,b)
                  {
                    return b.population-a.population;
                   })
        cList(data);
        cTable(data);
    })   
}
var sortpopAsc = function(data)
{
    d3.select(".popAsc").on("click",function()
    {
        d3.selectAll("#Gtable").remove();
        
        data.sort(function(a,b)
                  {
                    return a.population-b.population;
                   })
        cList(data);
        cTable(data);
    })   
}
var sortarAsc = function(data)
{
    d3.select(".AAAsc").on("click",function()
    {
        d3.selectAll("#Gtable").remove();
        
        data.sort(function(a,b)
                  {
                    return a.area-b.area;
                   })
        cList(data);
        cTable(data);
    })   
}
var sortardes = function(data)
{
    d3.select(".AADes").on("click",function()
    {
        d3.selectAll("#Gtable").remove();
        
        data.sort(function(a,b)
                  {
                    return b.area-a.area;
                   })
        cList(data);
        cTable(data);
    })   
}


/*
var reverseSort = function(country)
{
    d3.select("#reverse")
    .on("click", function(country)
       {
        return cList
    })
}
*/



/*var cImage = function(data)
{
    d3.select("#countryNames").append("div").attr("id","flags").append("svg").attr("src",function(d){return d.flag});
   
    
    
    https://www.thoughtco.com/population-density-overview-1435467 
    Link for Pop Density
    
}*/