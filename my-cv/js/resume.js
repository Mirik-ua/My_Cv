var swipe = document.getElementById('swipe');

var fr1 = "Web Developer";

swipe.onclick = function () {
	swipe.innerHTML = "Frontend - developer";
	if (!swipe ) {
		swipe.innerHTML = fr1;
	}
};

function dropMenu() {
	var drop = document.querySelector(".dropDownMenu");
	if (drop.style.display === "none") {
		drop.style.display = "block";
	}else{
		drop.style.display = "none";
	}
};
