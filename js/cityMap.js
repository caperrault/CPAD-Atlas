/*var selectedCity;

function cityClass(name) {
  d3.select(".selected").classed("selected", false);
  selectedCity = name;
  d3.selectAll(".Mcounty")
    .classed("selected", function(d) {return d.properties.name == name;})
    .transition().duration(300);
  d3.selectAll(".Tcounty")
    .classed("selected", function(d) {return d.County == name;})
    .transition().duration(300);
}*/

d3.json("CPAD_percity.json", function(err, ca) {

  /*var div = d3.select("body").append("div")
  .attr("class", "mapTooltip")
  .style("opacity", 0);

  var radio = d3.select(".ca")
              .append("input")
              .attr("type","Radio")*/

//  var width = 1000;
//  var height = 1000;

  var radius = d3.scale.sqrt()
    .domain([0, 50000000])
    .range([0, 15]);

var projection = d3.geo.albers()
    .translate([70, 210])
    .scale(2700)
    .rotate([122.4183, 0])
    .center([0, 37.7750]);

  var cityPoints = d3.geo.path().projection(projection);

  var svg = d3.select("#cityMapSvg");

    svg.append("path")
      .datum(topojson.feature(ca, ca.objects.ca_shape))
      .attr("d", d3.geo.path().projection(projection))
      .style("fill", "lightGray")
      .style("stroke-width", 0);

    svg.append("g")
      .attr("class", "bubble").selectAll("circle")
      .attr("d", d3.geo.path().projection(projection))
      .data(topojson.feature(ca, ca.objects.CPAD_cities).features)
      .sort(function(a, b) { return b.properties.ac_tot - a.properties.ac_tot; })
      .enter()
      .append("circle")
      .attr("transform", function(d) { return "translate(" + cityPoints.centroid(d) + ")"; })
      .attr("r", function (d) { return radius(d.properties.ac_tot)*50});

  /*var LegendW = 80;
      LegendH = 20;

  var svg = d3.select("#cityMapSvg").append("svg:svg")
      .attr("class", "mapLegend")
      .attr("width", LegendW)
      .attr("height", LegendH)
      .attr("x", 0)
      .attr("y", 420)
      .style("display", "none");

  var gradient = svg.append("svg:defs")
    .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "100%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "0%")
      .attr("spreadMethod", "pad");

  gradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "rgb(35,132,67)")
      .attr("stop-opacity", 1);

  gradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "rgb(255,245,96)")
      .attr("stop-opacity", 1);

  svg.append("svg:rect")
      .attr("width", LegendW)
      .attr("height", LegendH)
      .style("fill", "url(#gradient)");

  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x","15%")
      .attr("y","69%")
      .attr("dy",0)
      .style("font-size", "16px")
      .style("fill", "black")
      .text("-");

  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x","85%")
      .attr("y","65%")
      .attr("dy",0)
      .style("font-size", "14px")
      .style("fill", "white")
      .text("+");*/

/*d3.selectAll(".radio").on("change", function(){

if (document.getElementById("ac_tot").checked) {
        counties.transition().duration(250)
             .style("fill", function (d) {return colorTOT(d.properties.ac_tot);});
        svg.transition().duration(300).style("display", null);
             }

else if (document.getElementById("POP_NORM").checked) {
        counties.transition().duration(250)
             .style("fill", function (d) {return colorPOP(d.properties.POP_NORM);});
        svg.transition().duration(300).style("display", null);
             }
           });*/

  /*var counties = group.append("path")
            .attr("d",path)
            .attr("class", "Mcounty")
            .classed("geo", true)
            .style("fill", "LightGray")
            .on("mouseover", function(d) {
            div.transition().duration(300).style("opacity", 1);
            div.text(d.properties.name+" County")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY -30) + "px");})
            .on("mouseout", function (d) { div.transition().duration(300).style("opacity", 0);})
            .on("click", function(d) {
            selectedCounty = d.properties.name;
            countyClass(d.properties.name);
            updatePie1(d.properties.name);
            updatePie2(d.properties.name);
            updateCountyName(d.properties.name);
            updateCountyTot(d3.format(",")(d.properties.ac_tot));
            updateCountyInh(d3.format(",")(d.properties.POP_NORM));
        });*/

});
