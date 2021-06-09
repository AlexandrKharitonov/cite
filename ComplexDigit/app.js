let t = true;
let a, b, c;
while (t) {
	a = Number(prompt("Enter number a"));
	b = Number(prompt("Enter number b"));
	c = Number(prompt("Enter number c"));

	if (a==a && b==b && c==c){
    	t = false;
	} else {
		alert("Введите числа")
	}
}

if (a != 0 && b != 0 && c != 0) {
	let x1, x2, x3, x4;
	let d = b*b - 4*a*c;
	console.log("diskreminant = " + d);
	
	if (d == 0){
		let x = (-b / 2 * a);

		console.log("x = " + x.toFixed(2));

		alert(x.toFixed(2));
	}

	else if (d >= 0) {
		x1 = (-b + Math.sqrt(d)) / 2 * a;
		x2 = (-b - Math.sqrt(d)) / 2 * a;

		console.log("x1 = " + x1.toFixed(2));
		console.log("x2 = " + x2.toFixed(2));

		alert(x1.toFixed(2));
		alert(x2.toFixed(2));
	} 

	else {
		x1 = -b/2;
		x2 = Math.sqrt(Math.abs(d))/2;

	 	console.log(x1 + "+" + x2 + "i");
	 	console.log(x1 + "-" + x2 + "i");

	 	alert(x1.toFixed(2) + "+" + x2.toFixed(2) + "i");
		alert(x1.toFixed(2) + "-" + x2.toFixed(2) + "i");
	}
	
} 
else {
	if (a==0 && b == 0 && c!=0) {
		alert("Камон это константа")
	} else
		alert("Пахнет не уравнением");
}