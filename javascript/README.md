#Javascript

##mouse-not-drag.js

> Use

```
	let mouse can not move the element in the website
```

> Example

```
	document.ondragstart = mouse_not_drag() {
		return false;
	};
```

##not-select.js

> Use

```
	let mouse can not select the element in the website
```

> Example

```
	document.onselectstart = not_select() {
		return false;
	};
```

##right-mouse-not-click.js

> Use

```
	let user can not use right mouse.
```

> Example

```
	document.oncontextmenu = right_mouse-not_click() {
		window.event.returnValue = false;
	}
```
