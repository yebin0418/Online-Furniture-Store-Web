	function myFunction() {
   		 var x = document.getElementById("myTopnav");
    		 if (x.className === "topnav") {
       		 x.className += " responsive";
  		 } else {
       		 x.className = "topnav";
 		 }
	}
	// When the user clicks anywhere outside of the modal then close it
	window.onclick = function(event){
		var modal = document.getElementById('signin');
		if(event.target == modal){
			modal.style.display="none";
		}
	}
