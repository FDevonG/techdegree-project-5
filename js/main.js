const imageLinks = document.querySelectorAll(".image-link");
const searchInput = document.querySelector("#search-field");

searchInput.addEventListener('keyup', function() {
	"use strict";
	const userSearch = searchInput.value;
	for (let i = 0; i < imageLinks.length; i++) {
		const imageTextData = imageLinks[i].getAttribute("data-title");
		if (imageTextData.toLowerCase().indexOf(userSearch.toLowerCase()) !== -1) {
        	imageLinks[i].style.display = "block";
      	} 
		
		else { 
			imageLinks[i].style.display = "none";
    
	  	}
	}

});

