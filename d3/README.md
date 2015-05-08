#D3

##reSortRoot.js

> Use

```
	When a data use nest to sort,
	you can use this function to resrot for treemap
```

> Example

```
	data = d3.nest()
	  .key(function(d) { return d.year; })
	  .entries(data);

	data = reSortRoot(data);
```
