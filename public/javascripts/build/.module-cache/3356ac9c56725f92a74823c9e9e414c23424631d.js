
var data = [
{"date":"231001","m":63.4,"c":62.7},
{"date":"231002","m":58.0,"c":59.9},
{"date":"231003","m":53.3,"c":59.1},
{"date":"231004","m":55.7,"c":58.8},
{"date":"231005","m":64.2,"c":58.7},
{"date":"231006","m":58.8,"c":57.0},
{"date":"231007","m":57.9,"c":56.7},
{"date":"231008","m":61.8,"c":56.8},
{"date":"231009","m":69.3,"c":56.7},
{"date":"231010","m":71.2,"c":60.1},
{"date":"231011","m":68.7,"c":61.1},
{"date":"231012","m":61.8,"c":61.5},
{"date":"231013","m":63.0,"c":64.3},
{"date":"231014","m":66.9,"c":67.1},
{"date":"231015","m":61.7,"c":64.6},
{"date":"231016","m":61.8,"c":61.6},
{"date":"231017","m":62.8,"c":61.1},
{"date":"231018","m":60.8,"c":59.2},
{"date":"231020","m":65.1,"c":57.2},
{"date":"231019","m":62.1,"c":58.9},
{"date":"231021","m":55.6,"c":56.4},
{"date":"231022","m":54.4,"c":60.7},
{"date":"231023","m":54.4,"c":65.1},
{"date":"231024","m":54.8,"c":60.9},
{"date":"231025","m":57.9,"c":56.1},
{"date":"231026","m":54.6,"c":54.6},
{"date":"231027","m":54.4,"c":56.1},
{"date":"231028","m":42.5,"c":58.1},
{"date":"231029","m":40.9,"c":57.5},
{"date":"231030","m":38.6,"c":57.7},
{"date":"231031","m":44.2,"c":55.1},
{"date":"231032","m":49.6,"c":57.9},
{"date":"231033","m":47.2,"c":64.6},
{"date":"231034","m":50.1,"c":56.2},
{"date":"231035","m":50.1,"c":50.5},
{"date":"231036","m":43.5,"c":51.3},
{"date":"231037","m":43.8,"c":52.6},
{"date":"231038","m":48.9,"c":51.4},
{"date":"231039","m":55.5,"c":50.6},
{"date":"231040","m":53.7,"c":54.6},
{"date":"231041","m":57.7,"c":55.6},
{"date":"231042","m":48.5,"c":53.9},
{"date":"231043","m":46.8,"c":54.0},
{"date":"231044","m":51.1,"c":53.8},
{"date":"231045","m":56.8,"c":53.5},
{"date":"231046","m":59.7,"c":53.4},
{"date":"231047","m":56.5,"c":52.2},
{"date":"231048","m":49.6,"c":52.7},
{"date":"231049","m":41.5,"c":53.1},
{"date":"231050","m":44.3,"c":49.0},
{"date":"231051","m":54.0,"c":50.4},
{"date":"231052","m":54.1,"c":51.1},
{"date":"231053","m":49.4,"c":52.3},
{"date":"231054","m":50.0,"c":54.6},
{"date":"231055","m":44.0,"c":55.1},
{"date":"231056","m":50.3,"c":51.5},
{"date":"231057","m":52.1,"c":53.6},
{"date":"231058","m":49.6,"c":52.3},
{"date":"231059","m":57.2,"c":51.0},
{"date":"231060","m":59.1,"c":49.5},
{"date":"231061","m":50.6,"c":49.8},
{"date":"231062","m":44.3,"c":60.4},
{"date":"231063","m":43.9,"c":62.2},
{"date":"231064","m":42.1,"c":58.3},
{"date":"231065","m":43.9,"c":52.7},
{"date":"231066","m":50.2,"c":51.5},
{"date":"231067","m":54.2,"c":49.9},
{"date":"231068","m":54.6,"c":48.6},
{"date":"231069","m":43.4,"c":46.4},
{"date":"231070","m":42.2,"c":49.8},
{"date":"231071","m":45.0,"c":52.1},
{"date":"231072","m":33.8,"c":48.8},
{"date":"231073","m":36.8,"c":47.4},
{"date":"231074","m":38.6,"c":47.2},
{"date":"231075","m":41.9,"c":46.1},
{"date":"231076","m":49.6,"c":48.8},
{"date":"231077","m":50.2,"c":47.9},
{"date":"231078","m":40.6,"c":49.8},
{"date":"231079","m":29.1,"c":49.1},
{"date":"231080","m":33.7,"c":48.3},
{"date":"231081","m":45.8,"c":49.3},
{"date":"231082","m":47.4,"c":48.4},
{"date":"231083","m":54.4,"c":53.3},
{"date":"231084","m":47.8,"c":47.5},
{"date":"231085","m":34.9,"c":47.9},
{"date":"231086","m":35.9,"c":48.9},
{"date":"231087","m":43.6,"c":45.9},
{"date":"231088","m":42.9,"c":47.2},
{"date":"231089","m":46.2,"c":48.9},
{"date":"231090","m":30.8,"c":50.9},
{"date":"231091","m":40.8,"c":52.9},
{"date":"231092","m":49.8,"c":50.1},
{"date":"231093","m":40.4,"c":49.8},
{"date":"231101","m":50.6,"c":49.8},
{"date":"231102","m":44.3,"c":60.4},
{"date":"231103","m":43.9,"c":62.2},
{"date":"231104","m":42.1,"c":58.3},
{"date":"231105","m":43.9,"c":52.7},
{"date":"231106","m":50.2,"c":51.5},
{"date":"231107","m":54.2,"c":49.9},
{"date":"231108","m":54.6,"c":48.6},
{"date":"231109","m":43.4,"c":46.4},
{"date":"231110","m":42.2,"c":49.8},
{"date":"231111","m":45.0,"c":52.1},
{"date":"231112","m":33.8,"c":48.8},
{"date":"231113","m":36.8,"c":47.4},
{"date":"231114","m":38.6,"c":47.2},
{"date":"231115","m":41.9,"c":46.1},
{"date":"231116","m":49.6,"c":48.8},
{"date":"231117","m":50.2,"c":47.9},
{"date":"231118","m":40.6,"c":49.8},
{"date":"231119","m":29.1,"c":49.1},
{"date":"231120","m":33.7,"c":48.3},
{"date":"231121","m":45.8,"c":49.3},
{"date":"231122","m":47.4,"c":48.4},
{"date":"231123","m":54.4,"c":53.3},
{"date":"231124","m":47.8,"c":47.5},
{"date":"231125","m":34.9,"c":47.9},
{"date":"231126","m":35.9,"c":48.9},
{"date":"231127","m":43.6,"c":45.9},
{"date":"231128","m":42.9,"c":47.2},
{"date":"231129","m":46.2,"c":48.9},
{"date":"231130","m":30.8,"c":50.9},
{"date":"231131","m":40.8,"c":52.9},
{"date":"231132","m":49.8,"c":50.1},
{"date":"231133","m":40.4,"c":49.8}
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

function tick(value) {

  // push a new data point onto the back
  data.push(value);

  // redraw the line, and slide it to the left
    city.append("path")
      .attr("d", function(d) { return line(d.values); })
      .attr("transform", null)
    .transition()
      .duration(500)
      .ease("linear")
      .attr("transform", "translate(" + x(0) + ",0)")
      .style("stroke", function(d) { return color(d.name); });

  // pop the old data point off the front
  data.shift();

}

var monitoring = new EventSource("/monitoring");
var m,c;
monitoring.onmessage = function(msg) {
    var data = msg.data.replace("'","").replace("'","");
    var vs = data.split(":");
    if(vs[0] == 'm') {
        m = vs[1];
    } else {
        c = vs[1];
    }

    if(m > 0 && c > 0) {
        var now=new Date()
        var v = {"date":""+now.getHours()+now.getMinutes()+now.getSeconds(),"m":m,"c":c};
        //var v = {"date":"231008","m":61.8,"c":56.8};
        console.log(v);
        tick(v);
        m = -1;
        c = -1;
    }
    //tick(Math.floor(data));
};
/*
  city.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });
*/