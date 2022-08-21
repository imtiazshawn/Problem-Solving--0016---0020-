// 0016. Maximum Edge of a Triangle

function nextEdge(side1, side2) {
	const nxtEdge = (side1 + side2) - 1;
    return nxtEdge;
}

console.log(nextEdge(10, 11));




// 0017. Area of a Triangle

function triArea(base, height) {
	return (base * height) / 2;
}

console.log(triArea(7, 4));




//0018. Return age to days

function calcAge(age) {
	return age * 365;
}

console.log(calcAge(65));




// 0019. Find the Perimeter of a Rectangle

function findPerimeter(length, width) {
	let perimeter = 0;
	perimeter = 2 * length + 2 * width;
	return perimeter;
}

console.log(findPerimeter(5, 6));



// 0020. Power Calculator

function circuitPower(voltage, current) {
	return voltage * current;
}

console.log(circuitPower(230, 10));