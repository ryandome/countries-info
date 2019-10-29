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
   d3.select("body").append("ul").attr("id","list");
    d3.select("#list").selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .append("div")
    .attr("id","countryNames")
    .text(function(d){
        return d.name
    })
    
    .append("div")
    .attr("id","flags")
    .append("img")
    .attr("src",function(d){return d.flag})
    .attr("height",100)
    .attr("width",200)
    .on("click",function(d)
       {
        cTable(d);
    })



var cTable = function(country)
{
   
    d3.selectAll("tbody *").remove();
    
    var row = d3.select("tbody")
    .selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
    
    row.append("td")
        .text(function(d){
        var mapC = data[0].capital
        return mapC
    })
    
    row.append("td")
        .text(function(d){
        return data[0].area
    })
    
     row.append("td")
        .text(function(d){
        return data[0].population
    })
    
     row.append("td")
        .text(function(d){
        return data[0].nativeName
    })
    
    
   //alert("onclick works")
}

}


/*var cImage = function(data)
{
    d3.select("#countryNames").append("div").attr("id","flags").append("svg").attr("src",function(d){return d.flag});
   
    
    
    
    
}*/