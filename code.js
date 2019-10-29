d3.json("https://restcountries.eu/rest/v2/all")

var countryPromise=d3.json("https://restcountries.eu/rest/v2/all");
countryPromise.then(
function(data)
    {
        //cImage(data);
        cList(data);
        //cTable(data);
        console.log("works",data);
    },
    function(err)
    {
        console.log("error",data);
    })


var cList = function(data)
{
   d3.selectAll("tbody").attr("id","Gtable");
    d3.select("#Gtable").selectAll("tr")
    .data(data)
    .enter()
    .append("tr")
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
    .on("click",function(d)
       {
        cTable(d, d3.select(this));
    })



var cTable = function(country)
{
   
    /*d3.selectAll("tbody");*/
    
    var row = d3.select("#Gtable");
    //.selectAll("tr")
    //.data(data)
    //.enter()
    row.append("tr")
     
        .append("td")
        .text(function(d){
        return d.capital
    })
    
    row.append("td")
        .text(function(d){
        return d.area
    })
    
     row.append("td")
        .text(function(d){
        return d.population
    })
    
     row.append("td")
        .text(function(d){
        return d.nativeName
    })
    
    
   //alert("onclick works")
}

}


/*var cImage = function(data)
{
    d3.select("#countryNames").append("div").attr("id","flags").append("svg").attr("src",function(d){return d.flag});
   
    
    
    
    
}*/