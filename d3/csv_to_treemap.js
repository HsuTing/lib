var csv_file_name = "../../project_2/city.csv";
var key_word = [
	'year',
	'name',
];

d3.csv(csv_file_name, function(data) {
		data = d3.nest()

		  for(item in key_word) {
		    .key(function(d) { return d[ key_word[item] ]; })
		  }
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
