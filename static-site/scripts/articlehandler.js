//import { createCard } from './scripts/htmlutils.js';

/*
	Scripts for loading articles
*/

function showSearch(){
	var coll = document.getElementById("content");
	//hbar.style.maxHeight = 4;

	coll.classList.toggle("active");
	var content = this.nextElementSibling;
	if (content.style.maxHeight){
	  content.style.maxHeight = null;
	} else {
	  content.style.maxHeight = content.scrollHeight + "px";
	}
	
}

function loadArticles(){
	var container = document.getElementById('article-container');
	//container.appendChild(createCard());
	//container.appendChild(getInclude());
	getInclude();
}

function createCard(){
	console.log("createcard");
	var card_element = document.createElement("div");
	card_element.classList.add("card");
	
	var card_container = document.createElement("div");
	card_container.classList.add("container");
	
	card_container.innerHTML = "ARTICLE";
	
	card_element.appendChild(card_container);
	
	return card_element;
}

function getInclude(){
	
	var xhr= new XMLHttpRequest();
	xhr.open('GET', './articles/include.html', true);
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		document.getElementById('article-container').innerHTML= this.responseText;
	};
	xhr.send();
	
	/*var x = window.open("./articles/include.html"); 
	console.log(x);
	return x;*/
}