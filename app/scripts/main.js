$(document).ready(function(){

	var $newPost = $("#new-post");

	$newPost.hide();

	$("#new-header").on("click", function(){
		$newPost.slideToggle(500);
	});

	var defaults = {
		subject: document.getElementById("subject"),
		text: document.getElementById("text"),
		add: document.getElementById("add"),
		clear: document.getElementById("clear"),
		posts: document.getElementById("posts")
	};

	function printData(){
		var now = new Date(),
		data = now.toLocaleDateString(),
		el = document.createElement("p");

		el.innerHTML = data;
		el.className = "data";

		return el;

	}

	function add(){
		var subject = defaults.subject.value,
			text = defaults.text.value,
			fragment = document.createDocumentFragment(),
			heading = document.createElement("h4"),
			para = document.createElement("p");

		var subjectTextNode = document.createTextNode(subject),
			textTextNode = document.createTextNode(text),
			dataElement = printData();

		addChild(heading, subjectTextNode);
		addChild(para, textTextNode);
		para.className = "paragraf";

		addChild(fragment, heading);
		addChild(fragment, dataElement);
		addChild(fragment, para);

		defaults.posts.appendChild(fragment);
		
		defaults.subject.value = ' ';
		defaults.text.value = ' ';
	}

	function addChild(parent, child){
		parent.appendChild(child);
	}

	function counter(){
		var _counter = 500;
		var textLen = defaults.text.value.length;
		var counter = document.getElementById("counter");
		counter.innerHTML = _counter - textLen;
	}

	function clearForm(){
		defaults.subject.value = ' ';
		defaults.text.value = ' ';
	}
	
	defaults.add.addEventListener("click", add);
	defaults.clear.addEventListener("click", clearForm);
	
	var textArea = document.getElementById("text");
	textArea.addEventListener("keyup", counter);
});