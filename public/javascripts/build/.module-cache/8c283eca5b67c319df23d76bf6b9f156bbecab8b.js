
var data = [
{"date":"231001","New York":"63.4","San Francisco":"62.7"},
{"date":"231002","New York":"58.0","San Francisco":"59.9"},
{"date":"231003","New York":"53.3","San Francisco":"59.1"},
{"date":"231004","New York":"55.7","San Francisco":"58.8"},
{"date":"231005","New York":"64.2","San Francisco":"58.7"},
{"date":"231006","New York":"58.8","San Francisco":"57.0"},
{"date":"231007","New York":"57.9","San Francisco":"56.7"},
{"date":"231008","New York":"61.8","San Francisco":"56.8"},
{"date":"231009","New York":"69.3","San Francisco":"56.7"},
{"date":"231010","New York":"71.2","San Francisco":"60.1"},
{"date":"231011","New York":"68.7","San Francisco":"61.1"},
{"date":"231012","New York":"61.8","San Francisco":"61.5"},
{"date":"231013","New York":"63.0","San Francisco":"64.3"},
{"date":"231014","New York":"66.9","San Francisco":"67.1"},
{"date":"231015","New York":"61.7","San Francisco":"64.6"},
{"date":"231016","New York":"61.8","San Francisco":"61.6"},
{"date":"231017","New York":"62.8","San Francisco":"61.1"},
{"date":"231018","New York":"60.8","San Francisco":"59.2"},
{"date":"231019","New York":"62.1","San Francisco":"58.9"},
{"date":"231020","New York":"65.1","San Francisco":"57.2"},
{"date":"231021","New York":"55.6","San Francisco":"56.4"},
{"date":"231022","New York":"54.4","San Francisco":"60.7"},
{"date":"231023","New York":"54.4","San Francisco":"65.1"},
{"date":"231024","New York":"54.8","San Francisco":"60.9"},
{"date":"231025","New York":"57.9","San Francisco":"56.1"},
{"date":"231026","New York":"54.6","San Francisco":"54.6"},
{"date":"231027","New York":"54.4","San Francisco":"56.1"},
{"date":"231028","New York":"42.5","San Francisco":"58.1"},
{"date":"231029","New York":"40.9","San Francisco":"57.5"},
{"date":"231030","New York":"38.6","San Francisco":"57.7"},
{"date":"231031","New York":"44.2","San Francisco":"55.1"},
{"date":"231032","New York":"49.6","San Francisco":"57.9"},
{"date":"231033","New York":"47.2","San Francisco":"64.6"},
{"date":"231034","New York":"50.1","San Francisco":"56.2"},
{"date":"231035","New York":"50.1","San Francisco":"50.5"},
{"date":"231036","New York":"43.5","San Francisco":"51.3"},
{"date":"231037","New York":"43.8","San Francisco":"52.6"},
{"date":"231038","New York":"48.9","San Francisco":"51.4"},
{"date":"231039","New York":"55.5","San Francisco":"50.6"},
{"date":"231040","New York":"53.7","San Francisco":"54.6"},
{"date":"231041","New York":"57.7","San Francisco":"55.6"},
{"date":"231042","New York":"48.5","San Francisco":"53.9"},
{"date":"231043","New York":"46.8","San Francisco":"54.0"},
{"date":"231044","New York":"51.1","San Francisco":"53.8"},
{"date":"231045","New York":"56.8","San Francisco":"53.5"},
{"date":"231046","New York":"59.7","San Francisco":"53.4"},
{"date":"231047","New York":"56.5","San Francisco":"52.2"},
{"date":"231048","New York":"49.6","San Francisco":"52.7"},
{"date":"231049","New York":"41.5","San Francisco":"53.1"},
{"date":"231050","New York":"44.3","San Francisco":"49.0"},
{"date":"231051","New York":"54.0","San Francisco":"50.4"},
{"date":"231052","New York":"54.1","San Francisco":"51.1"},
{"date":"231053","New York":"49.4","San Francisco":"52.3"},
{"date":"231054","New York":"50.0","San Francisco":"54.6"},
{"date":"231055","New York":"44.0","San Francisco":"55.1"},
{"date":"231056","New York":"50.3","San Francisco":"51.5"},
{"date":"231057","New York":"52.1","San Francisco":"53.6"},
{"date":"231058","New York":"49.6","San Francisco":"52.3"},
{"date":"231059","New York":"57.2","San Francisco":"51.0"},
{"date":"231060","New York":"59.1","San Francisco":"49.5"}
];

var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%H%M%S").parse;

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