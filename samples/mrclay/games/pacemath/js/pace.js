function showactive() {
	var active = parseInt(document.getElementById("active1").value);
	console.log(active);
	var oper= "oper1";
	if (active==1) {
		oper = "oper1";

	}else if (active==2) {
		oper = "oper2";
	}else if (active==3) {
		oper = "oper3";
	}else if (active==4) {
		oper = "oper4";
	}else if (active==5) {
		oper = "oper5";
	}else if (active==6) {
		oper = "oper6";
	}
	document.getElementById(oper).style.display='block';
	console.log(oper);
}

function activeVal(num) {
	document.getElementById("active").value=parseInt(num);
	console.log(num);
}

// BOX-10-38171