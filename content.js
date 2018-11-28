function grabText() {
	var text = "";
	if (typeof window.getSelection != "undefined") {
		text = window.getSelection().toString();
	}
	else if (document.selection.type == "Text" && typeof document.selection != "undefined")
	{
		text = document.selection.createRange().text;
	}

	return text;
}


// auto copy selected text
document.addEventListener("selectionchange", () => {

	document.addEventListener("mouseup", () => {
		document.execCommand("copy");
	});
});

// send selected text as search query to Google
document.addEventListener("contextmenu", (e) => {
	var textSelected = grabText();
	console.log(textSelected);
	if (textSelected)
	{
		e.preventDefault();
		window.open('http://google.com/search?q=' + textSelected);
		return false;
	}
}, false);