#Javascript

##mouse-not-drag.js

> Use

```
	let mouse can not move the element in the website
```

> Example

```
	document.ondragstart = mouse-not-drag() {
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
	document.onselectstart = not-select() {
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
	document.oncontextmenu = right-mouse-not-click() {
		window.event.returnValue = false;
	}
```
