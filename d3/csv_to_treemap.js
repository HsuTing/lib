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
