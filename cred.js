
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var random_tm = getRandomInt(3000,6000);

function FindByAttributeValue(attribute, value)    {
  var All = document.getElementsByTagName('*');
  for (var i = 0; i < All.length; i++)       {
    if (All[i].getAttribute(attribute) == value) { return All[i]; }
  }
}




function clickerf(){
	var element = FindByAttributeValue("data-reactid",".0.0.$BQJjZib.0.1");
	if ("click" in element){
				element.click();
	}else if ("dispatchEvent" in element) {
		
		var evt = document.createEvent("MouseEvents");
		evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
		element.dispatchEvent(evt);
	}
	
}



setTimeout(clickerf,random_tm);