document.addEventListener("selectionchange", () => {

	document.addEventListener("mouseup", () => {
		document.execCommand("copy");
	})
});

document.addEventListener("contextmenu", (e) => {
	if (e.target.tagName !== "IMG" && e.target.tagName !== 'A')
	{
		e.preventDefault();
		const selectedText = window.getSelection().toString();
		window.open('http://google.com/search?q=' + selectedText);
		return false;
	}
}, false);



//clear clipboard after 10 seconds