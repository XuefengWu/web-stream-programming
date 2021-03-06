function Gauge(placeholderName, configuration)
{
	var self = this; // for internal d3 functions

    var container;
    var config;

	var configure = function(configuration)
	{
		config = configuration;

		config.size = config.size * 0.9;

		config.raduis = config.size * 0.97 / 2;
		config.cx = config.size / 2;
		config.cy = config.size / 2;

		config.min = undefined != configuration.min ? configuration.min : 0;
		config.max = undefined != configuration.max ? configuration.max : 100;
		config.range = config.max - config.min;

		config.majorTicks = configuration.majorTicks || 5;
		config.minorTicks = configuration.minorTicks || 2;

		config.greenColor 	= configuration.greenColor || "#109618";
		config.yellowColor = configuration.yellowColor || "#FF9900";
		config.redColor 	= configuration.redColor || "#DC3912";

		config.transitionDuration = configuration.transitionDuration || 500;

		return config;
	}

    this.render = function() {
    console.log("render");
    var heartbeat = d3.select("#heartbeat")
        .append("svg").attr("width", 200).attr("height", 200)
        .append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 30)
        .attr("fill", "red");

        heartbeat.transition().duration(70).attr("r", 70)
              .transition().duration(70).attr("r", 30)
              .transition().duration(70).attr("r", 60)
              .transition().duration(70).attr("r", 30);
    }
	/*
	this.render = function()
	{

        console.log("render");
		container = d3.select("#" + placeholderName)
							.append("svg:svg")
							.attr("class", "gauge")
							.attr("width", config.size)
							.attr("height", config.size);



		container.append("svg:circle")
					.attr("cx", config.cx)
					.attr("cy", config.cy)
					.attr("r", config.raduis)
					.style("fill", "#ccc")
					.style("stroke", "#000")
					.style("stroke-width", "0.5px");

		container.append("svg:circle")
					.attr("cx", config.cx)
					.attr("cy", config.cy)
					.attr("r", 0.9 * config.raduis)
					.style("fill", "#fff")
					.style("stroke", "#e0e0e0")
					.style("stroke-width", "2px");

		for (var index in config.greenZones)
		{
			this.drawBand(config.greenZones[index].from, config.greenZones[index].to, self.config.greenColor);
		}

		for (var index in config.yellowZones)
		{
			this.drawBand(config.yellowZones[index].from, config.yellowZones[index].to, self.config.yellowColor);
		}

		for (var index in config.redZones)
		{
			this.drawBand(config.redZones[index].from, config.redZones[index].to, self.config.redColor);
		}

		if (undefined != config.label)
		{
			var fontSize = Math.round(config.size / 9);
			container.append("svg:text")
						.attr("x", config.cx)
						.attr("y", config.cy / 2 + fontSize / 2)
						.attr("dy", fontSize / 2)
						.attr("text-anchor", "middle")
						.text(config.label)
						.style("font-size", fontSize + "px")
						.style("fill", "#333")
						.style("stroke-width", "0px");
		}

		var fontSize = Math.round(config.size / 16);
		var majorDelta = config.range / (config.majorTicks - 1);
		for (var major = config.min; major <= config.max; major += majorDelta)
		{
			var minorDelta = majorDelta / config.minorTicks;
			for (var minor = major + minorDelta; minor < Math.min(major + majorDelta, config.max); minor += minorDelta)
			{
				var point1 = this.valueToPoint(minor, 0.75);
				var point2 = this.valueToPoint(minor, 0.85);

				container.append("svg:line")
							.attr("x1", point1.x)
							.attr("y1", point1.y)
							.attr("x2", point2.x)
							.attr("y2", point2.y)
							.style("stroke", "#666")
							.style("stroke-width", "1px");
			}

			var point1 = this.valueToPoint(major, 0.7);
			var point2 = this.valueToPoint(major, 0.85);

			container.append("svg:line")
						.attr("x1", point1.x)
						.attr("y1", point1.y)
						.attr("x2", point2.x)
						.attr("y2", point2.y)
						.style("stroke", "#333")
						.style("stroke-width", "2px");

			if (major == config.min || major == config.max)
			{
				var point = this.valueToPoint(major, 0.63);

				container.append("svg:text")
				 			.attr("x", point.x)
				 			.attr("y", point.y)
				 			.attr("dy", fontSize / 3)
				 			.attr("text-anchor", major == config.min ? "start" : "end")
				 			.text(major)
				 			.style("font-size", fontSize + "px")
							.style("fill", "#333")
							.style("stroke-width", "0px");
			}
		}

		var pointerContainer = container.append("svg:g").attr("class", "pointerContainer");

		var midValue = (config.min + config.max) / 2;

		var pointerPath = this.buildPointerPath(midValue);

		var pointerLine = d3.svg.line()
									.x(function(d) { return d.x })
									.y(function(d) { return d.y })
									.interpolate("basis");

		pointerContainer.selectAll("path")
							.data([pointerPath])
							.enter()
								.append("svg:path")
									.attr("d", pointerLine)
									.style("fill", "#dc3912")
									.style("stroke", "#c63310")
									.style("fill-opacity", 0.7)

		pointerContainer.append("svg:circle")
							.attr("cx", config.cx)
							.attr("cy", config.cy)
							.attr("r", 0.12 * config.raduis)
							.style("fill", "#4684EE")
							.style("stroke", "#666")
							.style("opacity", 1);

		var fontSize = Math.round(config.size / 10);
		pointerContainer.selectAll("text")
							.data([midValue])
							.enter()
								.append("svg:text")
									.attr("x", config.cx)
									.attr("y", config.size - config.cy / 4 - fontSize)
									.attr("dy", fontSize / 2)
									.attr("text-anchor", "middle")
									.style("font-size", fontSize + "px")
									.style("fill", "#000")
									.style("stroke-width", "0px");

		this.redraw(config.min, 0);
	}*/

	this.buildPointerPath = function(value)
	{
		var delta = config.range / 13;

		var head = valueToPoint(value, 0.85);
		var head1 = valueToPoint(value - delta, 0.12);
		var head2 = valueToPoint(value + delta, 0.12);

		var tailValue = value - (config.range * (1/(270/360)) / 2);
		var tail = valueToPoint(tailValue, 0.28);
		var tail1 = valueToPoint(tailValue - delta, 0.12);
		var tail2 = valueToPoint(tailValue + delta, 0.12);

		return [head, head1, tail2, tail, tail1, head2, head];

		function valueToPoint(value, factor)
		{
			var point = self.valueToPoint(value, factor);
			point.x -= self.config.cx;
			point.y -= self.config.cy;
			return point;
		}
	}

	this.drawBand = function(start, end, color)
	{
		if (0 >= end - start) return;

		container.append("svg:path")
					.style("fill", color)
					.attr("d", d3.svg.arc()
						.startAngle(this.valueToRadians(start))
						.endAngle(this.valueToRadians(end))
						.innerRadius(0.65 * config.raduis)
						.outerRadius(0.85 * config.raduis))
					.attr("transform", function() { return "translate(" + self.config.cx + ", " + self.config.cy + ") rotate(270)" });
	}

	this.redraw = function(value, transitionDuration)
	{
		var pointerContainer = container.select(".pointerContainer");

		pointerContainer.selectAll("text").text(Math.round(value));

		var pointer = pointerContainer.selectAll("path");
		pointer.transition()
					.duration(undefined != transitionDuration ? transitionDuration : config.transitionDuration)
					//.delay(0)
					//.ease("linear")
					//.attr("transform", function(d)
					.attrTween("transform", function()
					{
						var pointerValue = value;
						if (value > self.config.max) pointerValue = self.config.max + 0.02*self.config.range;
						else if (value < self.config.min) pointerValue = self.config.min - 0.02*self.config.range;
						var targetRotation = (self.valueToDegrees(pointerValue) - 90);
						var currentRotation = self._currentRotation || targetRotation;
						self._currentRotation = targetRotation;

						return function(step)
						{
							var rotation = currentRotation + (targetRotation-currentRotation)*step;
							return "translate(" + self.config.cx + ", " + self.config.cy + ") rotate(" + rotation + ")";
						}
					});
	}

	this.valueToDegrees = function(value)
	{
		// thanks @closealert
		//return value / config.range * 270 - 45;
		return value / config.range * 270 - (config.min / config.range * 270 + 45);
	}

	this.valueToRadians = function(value)
	{
		return this.valueToDegrees(value) * Math.PI / 180;
	}

	this.valueToPoint = function(value, factor)
	{
		return { 	x: config.cx - config.raduis * factor * Math.cos(this.valueToRadians(value)),
					y: config.cy - config.raduis * factor * Math.sin(this.valueToRadians(value)) 		};
	}

	// initialization
	configure(configuration);
}