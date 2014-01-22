
var data = [
{"date":"20111001","New York":"63.4","San Francisco":"62.7"},
{"date":"20111002","New York":"58.0","San Francisco":"59.9"},
{"date":"20111003","New York":"53.3","San Francisco":"59.1"},
{"date":"20111004","New York":"55.7","San Francisco":"58.8"},
{"date":"20111005","New York":"64.2","San Francisco":"58.7"},
{"date":"20111006","New York":"58.8","San Francisco":"57.0"},
{"date":"20111007","New York":"57.9","San Francisco":"56.7"},
{"date":"20111008","New York":"61.8","San Francisco":"56.8"},
{"date":"20111009","New York":"69.3","San Francisco":"56.7"},
{"date":"20111010","New York":"71.2","San Francisco":"60.1"},
{"date":"20111011","New York":"68.7","San Francisco":"61.1"},
{"date":"20111012","New York":"61.8","San Francisco":"61.5"},
{"date":"20111013","New York":"63.0","San Francisco":"64.3"},
{"date":"20111014","New York":"66.9","San Francisco":"67.1"},
{"date":"20111015","New York":"61.7","San Francisco":"64.6"},
{"date":"20111016","New York":"61.8","San Francisco":"61.6"},
{"date":"20111017","New York":"62.8","San Francisco":"61.1"},
{"date":"20111018","New York":"60.8","San Francisco":"59.2"},
{"date":"20111019","New York":"62.1","San Francisco":"58.9"},
{"date":"20111020","New York":"65.1","San Francisco":"57.2"},
{"date":"20111021","New York":"55.6","San Francisco":"56.4"},
{"date":"20111022","New York":"54.4","San Francisco":"60.7"},
{"date":"20111023","New York":"54.4","San Francisco":"65.1"},
{"date":"20111024","New York":"54.8","San Francisco":"60.9"},
{"date":"20111025","New York":"57.9","San Francisco":"56.1"},
{"date":"20111026","New York":"54.6","San Francisco":"54.6"},
{"date":"20111027","New York":"54.4","San Francisco":"56.1"},
{"date":"20111028","New York":"42.5","San Francisco":"58.1"},
{"date":"20111029","New York":"40.9","San Francisco":"57.5"},
{"date":"20111030","New York":"38.6","San Francisco":"57.7"},
{"date":"20111031","New York":"44.2","San Francisco":"55.1"},
{"date":"20111101","New York":"49.6","San Francisco":"57.9"},
{"date":"20111102","New York":"47.2","San Francisco":"64.6"},
{"date":"20111103","New York":"50.1","San Francisco":"56.2"},
{"date":"20111104","New York":"50.1","San Francisco":"50.5"},
{"date":"20111105","New York":"43.5","San Francisco":"51.3"},
{"date":"20111106","New York":"43.8","San Francisco":"52.6"},
{"date":"20111107","New York":"48.9","San Francisco":"51.4"},
{"date":"20111108","New York":"55.5","San Francisco":"50.6"},
{"date":"20111109","New York":"53.7","San Francisco":"54.6"},
{"date":"20111110","New York":"57.7","San Francisco":"55.6"},
{"date":"20111111","New York":"48.5","San Francisco":"53.9"},
{"date":"20111112","New York":"46.8","San Francisco":"54.0"},
{"date":"20111113","New York":"51.1","San Francisco":"53.8"},
{"date":"20111114","New York":"56.8","San Francisco":"53.5"},
{"date":"20111115","New York":"59.7","San Francisco":"53.4"},
{"date":"20111116","New York":"56.5","San Francisco":"52.2"},
{"date":"20111117","New York":"49.6","San Francisco":"52.7"},
{"date":"20111118","New York":"41.5","San Francisco":"53.1"},
{"date":"20111119","New York":"44.3","San Francisco":"49.0"},
{"date":"20111120","New York":"54.0","San Francisco":"50.4"},
{"date":"20111121","New York":"54.1","San Francisco":"51.1"},
{"date":"20111122","New York":"49.4","San Francisco":"52.3"},
{"date":"20111123","New York":"50.0","San Francisco":"54.6"},
{"date":"20111124","New York":"44.0","San Francisco":"55.1"},
{"date":"20111125","New York":"50.3","San Francisco":"51.5"},
{"date":"20111126","New York":"52.1","San Francisco":"53.6"},
{"date":"20111127","New York":"49.6","San Francisco":"52.3"},
{"date":"20111128","New York":"57.2","San Francisco":"51.0"},
{"date":"20111129","New York":"59.1","San Francisco":"49.5"},
{"date":"20111130","New York":"50.6","San Francisco":"49.8"},
{"date":"20111201","New York":"44.3","San Francisco":"60.4"},
{"date":"20111202","New York":"43.9","San Francisco":"62.2"},
{"date":"20111203","New York":"42.1","San Francisco":"58.3"},
{"date":"20111204","New York":"43.9","San Francisco":"52.7"},
{"date":"20111205","New York":"50.2","San Francisco":"51.5"},
{"date":"20111206","New York":"54.2","San Francisco":"49.9"},
{"date":"20111207","New York":"54.6","San Francisco":"48.6"},
{"date":"20111208","New York":"43.4","San Francisco":"46.4"},
{"date":"20111209","New York":"42.2","San Francisco":"49.8"},
{"date":"20111210","New York":"45.0","San Francisco":"52.1"},
{"date":"20111211","New York":"33.8","San Francisco":"48.8"},
{"date":"20111212","New York":"36.8","San Francisco":"47.4"},
{"date":"20111213","New York":"38.6","San Francisco":"47.2"},
{"date":"20111214","New York":"41.9","San Francisco":"46.1"},
{"date":"20111215","New York":"49.6","San Francisco":"48.8"},
{"date":"20111216","New York":"50.2","San Francisco":"47.9"},
{"date":"20111217","New York":"40.6","San Francisco":"49.8"},
{"date":"20111218","New York":"29.1","San Francisco":"49.1"},
{"date":"20111219","New York":"33.7","San Francisco":"48.3"},
{"date":"20111220","New York":"45.8","San Francisco":"49.3"},
{"date":"20111221","New York":"47.4","San Francisco":"48.4"},
{"date":"20111222","New York":"54.4","San Francisco":"53.3"},
{"date":"20111223","New York":"47.8","San Francisco":"47.5"},
{"date":"20111224","New York":"34.9","San Francisco":"47.9"},
{"date":"20111225","New York":"35.9","San Francisco":"48.9"},
{"date":"20111226","New York":"43.6","San Francisco":"45.9"},
{"date":"20111227","New York":"42.9","San Francisco":"47.2"},
{"date":"20111228","New York":"46.2","San Francisco":"48.9"},
{"date":"20111229","New York":"30.8","San Francisco":"50.9"},
{"date":"20111230","New York":"40.8","San Francisco":"52.9"},
{"date":"20111231","New York":"49.8","San Francisco":"50.1"},
{"date":"20120111","New York":"40.4","San Francisco":"49.8"}
];

var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%H%M%d").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();


var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d,i) { return x(d.date); })
    .y(function(d) { return y(d.temperature); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

  data.forEach(function(d) {
    d.date = parseDate(d.date);
  });

  var cities = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {date: d.date, temperature: +d[name]};
      })
    };
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));

  y.domain([
    d3.min(cities, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
    d3.max(cities, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
  ]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Temperature (ºF)");

  var city = svg.selectAll(".city")
      .data(cities)
    .enter().append("g")
      .attr("class", "city");

  city.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d) { return color(d.name); });

/*
  city.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });
*/