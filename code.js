d3.json("https://restcountries.eu/rest/v2/all")

var countryPromise=d3.json("https://restcountries.eu/rest/v2/all");
countryPromise.then(
function(data)
    {
        //cImage(data);
        cList(data);
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
    
    .append("div").attr("id","flags").append("img").attr("src",function(d){return d.flag}).attr("height",100).attr("width",200);
}

/*var cImage = function(data)
{
    d3.select("#countryNames").append("div").attr("id","flags").append("svg").attr("src",function(d){return d.flag});
   
    
    
    
    
}*/