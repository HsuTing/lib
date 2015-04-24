var csv_file_name = "../../city.csv";

d3.csv(csv_file_name, function(data) {
	data = d3.nest()
	  .key(function(d) { return d.year; })
	  .key(function(d) { return d.name; })
	  .entries(data);

	console.log(data);
});

function reSortRoot(root) {
	for(var key in root) {
		if(key == "key") {
			root.name = root.key;
			delete root.key;
		}

		if(key == "values") {
			root.children = [];
			for(item in root.values) {
				root.children.push(reSortRoot(root.values[item]));
			}
			delete root.values;
		}
	}

	return root;
}
