function shide(id) {//find the element in html.

	var div = document.getElementById(id); //set the variable.

	if(div.style.display == 'none'){ //if the property of 'display' is none.
		div.style.display = '';//then change property to ''.
	}else{//otherwise
		div.style.display = 'none';//change property to 'none'.
	}
}