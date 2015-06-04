var d3_tip = function() {
	var x = 0;
	var y = 0;
	var tx = 0;
	var ty = 0;
	var element = [];

	$("body")
	  .prepend("<div class = 'd3-tip'></div>");
	$(".d3-tip").hide();

	//set text
	this.html = function(d1, d2) {
		for(var i in d1) {
			$(".d3-tip")
			  .append("<strong>" + d2[i] + ": </strong>")
			  .append("<span id = " + d1[i] + " style = 'color:red'></span><br>");

			element.push(d1[i]);
		}
	}

	//set offset
	this.offset = function(d) {
		x = d[0];
		y = d[1];
	}

	//set move
	this.move = function(d) {
		tx = d3.event.x + x;
		ty = d3.event.y + y;

		for(var i in element) {
			$(".d3-tip")
			  .children("#" + element[i]).text(d[element[i]]);
		}

		if(ty + $(".d3-tip").height() > $(window).height() - 50) {
			ty = $(window).height() - $(".d3-tip").height() - 50;
		}
	}

	//set show
	this.show = function() {
		$(".d3-tip").css({
		  top: ty + "px",
		  left: tx + "px"
		});
		$(".d3-tip").show();
	}

	//set hide
	this.hide = function() {
		$(".d3-tip").hide();
	}

	return this;
}
