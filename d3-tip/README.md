#d3-tip

##Library

- jquery
- d3.js
- d3-tip.js
- d3-tip.css

##Function

> html

```
	Purpose:

		set how to display.

	Use:

		d3_tip.html(array1, array2);
		array1: data name.
		array2: output text.

	Example:

		var tip = d3_tip();
		tip.html(
			['西元年', '第一層_六區', '第二層_縣市', '第三層_鄉鎮', '死亡數'],
			['西元年', '區', '縣市', '鄉鎮', '死亡數(人)']
		);
```

> offset

```
	Purpose:

		position 

	Use:

		d3_tip.offset([x, y]);

	Example:

		var tip = d3_tip();
		tip.offset([20, 20]);
```

> move

```
	Purpose:

		update data.

	Use:

		d3_tip.move(data);

	Example:

		var tip = d3_tip();
		(Variable)
		  .on("mousemove", function(d) { tip.move(d); });
```

> show

```
	Purpose:

		show d3_tip.

	Use:

		d3_tip.show();

	Example:

		var tip = d3_tip();
		(Variable)
		  .on("mousemove", function(d) { tip.show(); });
```

> hide

```
	Purpose:

		hide d3_tip.

	Use:

		d3_tip.hide();

	Example:

		var tip = d3_tip();
		(Variable)
		  .on("mouseout", function() { d3_tip.hide(); });
```
