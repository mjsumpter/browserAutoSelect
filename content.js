document.addEventListener("selectionchange", () => {

	document.addEventListener("mouseup", () => {
		document.execCommand("copy");
	})

	document.addEventListener("contextmenu", (e) => {
		e.preventDefault();
		const selectedText = window.getSelection().toString();
		return false;
	}, false)
})



//clear clipboard after 10 seconds