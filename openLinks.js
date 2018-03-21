function openLinks(selector, time){
	var selectors = [].slice.call(document.querySelectorAll(selector));

	var int = setInterval(function(){
		if(selectors.length){
			window.open(selectors.shift().href);
		}else{
			clearInterval(int);
			return true;
		}
	}, time);
}
