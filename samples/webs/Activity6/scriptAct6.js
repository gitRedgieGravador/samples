function quadratic(){
    var a = parseInt(document.getElementById('consA').value);
    var b = parseInt(document.getElementById('consB').value);
    var c = parseInt(document.getElementById('consC').value);
    /* STANDARD FORM ax² + bx + c = 0
    FORMULA :   x =  −b +- √(b² − 4ac) / 2a    */
    var discr = (b**2) - (4*a*c);
    var sqrExp =  Math.sqrt((b**2) - (4*a*c));
    var firstRoot = (-b + sqrExp) / (2*a);
    var secondRoot = (-b - sqrExp) / (2*a);

    if (a == 0 && b == 0){
        document.getElementById('result').innerHTML = "RESULT : No Solution a and b can't be zero"; 
    }else if (a == 0){
        var onlyRoot = -c/b;
        document.getElementById('result').innerHTML = "RESULT : only root is " + onlyRoot; 
    }else if (discr < 0){
        document.getElementById('result').innerHTML = "RESULT : No Real roots or Imaginary ; Discrimenant = " + discr; 
    }else {
        document.getElementById('result').innerHTML = "RESULT : Roots are " + firstRoot.toFixed(2) +" and " + secondRoot.toFixed(2);
    }   
}

//Cartesian
function locate(){
	var angle = parseInt(document.getElementById('cartAngle').value);
	var newAngle
	if (angle < 0){
	    newAngle = Math.abs(angle);
	    if (newAngle > 360){
	        while (newAngle > 360){
	        newAngle -= 360;
	        }angle = 360 - newAngle;
	    }else{
	        angle = 360 - newAngle;
	    }
	}else if (angle > 360){
	    while (angle > 360){
	        angle -= 360;
	    }
	}
        
	findNow(angle);
}
function findNow(angle){
    var fangle = parseInt(document.getElementById('cartAngle').value);
    if (angle == 360 || angle == 180){
    document.getElementById('cartResult').innerHTML = fangle + " degrees is in x-access";
    }else if (angle == 90 || angle == 270){
        document.getElementById('cartResult').innerHTML = fangle + " degrees is in y-access";
    }else if (angle < 90){
        document.getElementById('cartResult').innerHTML = fangle + " degrees is in Quadrant - I";
    }else if (angle > 90 && angle < 180){
        document.getElementById('cartResult').innerHTML = fangle + " degrees is in Quadrant - II";
    }else if (angle > 180 && angle < 270){
        document.getElementById('cartResult').innerHTML = fangle + " degrees is in Quadrant - III";
    }else if (angle > 270){
        document.getElementById('cartResult').innerHTML = fangle + " degrees is in Quadrant - IV";
    } 
}

//  BMI
function BMI(){
    document.getElementById('div').style.display = 'block';
    var a = 0.01 * parseInt(document.getElementById('height').value);
    var b = 0.453592 * parseInt(document.getElementById('weight').value);
    var BMI = (b / (a**2)).toFixed(2);
    var d = 2019 - parseInt(document.getElementById('bday').value);
    var x;
    if (BMI < 18.5){
        x =  "Underweight";
        show('underweight');hide('normal','overweight','obese');
    }else if (BMI < 25 && BMI >= 18.5){
        x =  "Normal";
        show('normal');hide('underweight','overweight','obese');
    }else if (BMI < 30 && BMI >=25){
        x =  "Overweight";
        show('overweight');hide('normal','underweight','obese');
    }else if (BMI > 30){
        x =  "Obese";
        show('obese');hide('normal','overweight','underweight');
    };
    document.getElementById('oname').innerHTML = "Name: " + document.getElementById('name').value;
    document.getElementById('oage').innerHTML = "Age: " + d;
    document.getElementById('oweight').innerHTML = "Weight: " + document.getElementById('weight').value;
    document.getElementById('oheight').innerHTML = "Height: " + document.getElementById('height').value;
    document.getElementById('oBMI').innerHTML = "BMI: " + BMI;
    document.getElementById('oevaluate').innerHTML = "Evaluation: " + x;
}
function hide(id1,id2,id3){
    document.getElementById(id1).style.display = 'none';
    document.getElementById(id2).style.display = 'none';
    document.getElementById(id3).style.display = 'none';
}
function show(id){
    document.getElementById(id).style.display = 'block';
}
//  Triangle
function Submit6(){
    var a = parseInt(document.getElementById('sidea').value);
    var b = parseInt(document.getElementById('sideb').value);
    var c = parseInt(document.getElementById('sidec').value);
    if (a <= 0 || b <= 0 || c <= 0){
        alert("Invalid input")
    }
    else if (a == b && b == c) {
        document.getElementById('mine').innerHTML = "It is an Equilateral Triangle";
    }
    else if(a == b || b == c || a == c){
        document.getElementById('mine').innerHTML = "It is an Isosceles Triangle";
    }
    else if (a != b && b != c){
        document.getElementById('mine').innerHTML = "It is a Scalene Triangle";
    }
}

//  string swapping
function Swap(){
    var a = document.getElementById('text1').value;
    var b = document.getElementById('text2').value;
    [a,b] = [b,a];
    document.getElementById('text1').value = a;
    document.getElementById('text2').value = b;            
}

//  Salary
function Submit(){
    var a = parseInt(document.getElementById('salary').value);
    var b = parseInt(document.getElementById('hour').value);
    var c;
    if (b <= 40){
        c = a * b;
    }else{
        c = (a * 40) + (a + (a/2));
    }
    document.getElementById('answer').innerHTML = c
}

// sum and avergeof three digits string
function Answer(){
    var i = document.getElementById('num').value;
    var x = i.charAt(0);
    var y = i.charAt(1);
    var z = i.charAt(2);
    var a = parseInt(x) + parseInt(y) + parseInt(z);
    var b = a / 3;
    document.getElementById('out').innerHTML = "Sum: " + a ;
    document.getElementById('ave').innerHTML = "Average: " + b.toFixed(2) ;
}

//  Service fee
function serviceFee(){
    document.getElementById('measures').style.display = 'block';
        //Get the inputs and store to variables
    var width = parseInt(document.getElementById('rmWidth').value);
    var lenght = parseInt(document.getElementById('rmLenght').value);
    var height = parseInt(document.getElementById('rmHeight').value);
    var wallpaperCost = parseInt(document.getElementById('wallpaper').value);
    var carpetCost = parseInt(document.getElementById('Carpet').value);
    var paintCost = parseInt(document.getElementById('paint').value);
    var discount = parseInt(document.getElementById('discountValue').value);
    var laborCost = 2.5;
        //Compute areas
    var floorArea = lenght * width;
    var wallArea = ((height * width) + (height * lenght)) * 2;
    var ceilArea = floorArea;
    var totalArea = floorArea + wallArea + ceilArea;
    var totalArChar = (carpetCost * floorArea) + (wallpaperCost * wallArea) + (paintCost * (ceilArea));
    var totalAreaCost = (totalArChar) / totalArea;
        //Display measurements
    document.getElementById('resLenght').innerHTML = lenght;
    document.getElementById('resWidth').innerHTML = width;
    document.getElementById('resHeight').innerHTML = height;
    document.getElementById('resWall').innerHTML = wallArea;
    document.getElementById('resFloor').innerHTML = floorArea;
    document.getElementById('resCeil').innerHTML = ceilArea;
        //Display Cost/qr ft
    document.getElementById('carpetCost').innerHTML = carpetCost.toFixed(2);
    document.getElementById('wallCost').innerHTML = wallpaperCost.toFixed(2);
    document.getElementById('paintCost').innerHTML = paintCost.toFixed(2);
    //NOT YET FINAL TOTAL  area COST
    document.getElementById('totalAreaCost').innerHTML = (totalAreaCost).toFixed(2);
    document.getElementById('displayDiscountValue').innerHTML = discount + "%";
        //compute and display charges
    document.getElementById('carpetCharge').innerHTML = (carpetCost * floorArea).toFixed(2);
    document.getElementById('wallCharge').innerHTML = (wallpaperCost * wallArea).toFixed(2);
    document.getElementById('paintCharge').innerHTML = (paintCost * (ceilArea)).toFixed(2);

    document.getElementById('totalAreaCharge').innerHTML = (totalArChar).toFixed(2);
    document.getElementById('laborCharge').innerHTML = (totalArea * 2.50).toFixed(2);

    document.getElementById('installedPriceCharge').innerHTML = ((((carpetCost * floorArea) + (wallpaperCost * wallArea) + (paintCost * (wallArea + ceilArea)))) + (totalArea * 2.50)).toFixed(2);
    var discountAmount = ((((carpetCost * floorArea) + (wallpaperCost * wallArea) + (paintCost * (wallArea + ceilArea)))) + (totalArea * 2.50)) * (discount / 100);
    document.getElementById('discountedCharge').innerHTML = discountAmount.toFixed(2);
    var subtotal = (((((carpetCost * floorArea) + (wallpaperCost * wallArea) + (paintCost * (wallArea + ceilArea)))) + (totalArea * 2.50)) - discountAmount);
    document.getElementById('subtotalCharge').innerHTML = subtotal;
    document.getElementById('taxedCharge').innerHTML = (subtotal * (0.12)).toFixed(2);
    document.getElementById('finalCharge').innerHTML = (subtotal + (subtotal * 0.12)).toFixed(2);
}