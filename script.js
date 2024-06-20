//your JS code here. If required.
const divs=document.querySelectorAll(".square");

divs.forEach(el=>{
	el.addEventListener("mouseover", function(event){
		divs.forEach(div=>{
			if(div!=event.target){
				div.style.backgroundColor='#6F4E37'
			}
		});
		
	})
	el.addEventListener("mouseout", function(){
		divs.forEach((div) => {
		    div.style.backgroundColor = '#E6E6FA'; // lavender
	    });
	})
})