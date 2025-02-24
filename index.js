// let n=0;
// if (n < 0) {
// 	console.log("Number is negative");
// } else if (n % 2 === 0) {
// 	console.log("Even");
// } else {
// 	console.log("Odd");
// }

// //
// const sum = arr.reduce((acc, num) => acc + num, 0); 
// console.log(sum);

// //
// const reversedString = s.split('').reverse().join(''); 
// console.log(reversedString);


// //
// const maxElement = Math.max(...arr);
// console.log(maxElement);

// //
// const reversedString = s.split('').reverse().join('');

// if (s === reversedString) {
// 	console.log("Yes");
// } else {
// 	console.log("No");
// }


//-----------------------
console.log('<--SCIC-BATCH-10-->');

function inchToFeet(inch){
	const feet = inch / 12;
	return feet ;
}

// console.log(inchToFeet(75));

function inchToFeet2(inch){
	const feetFraction = inch / 12 ;
	const feetNumber = parseInt(feetFraction);
	const inchRemaining = inch % 12 ;
	const result = feetNumber + ' feet ' + inchRemaining + ' inch';
	return result ;
}

// console.log(inchToFeet2(75));

// console.log(inchToFeet2);

function mileToKilometer(mile){
	const kilo = mile * 1.60934;
	return kilo;
}

// console.log(mileToKilometer(20));

function kiloMeterToMiles(kilo){
	const mile = kilo * 0.621371;
	return mile ;
}

// console.log(kiloMeterToMiles(75));

function isLeapYear(year){
	if(year % 4 === 0){
		return `${year} is leap year`;
	}else{
		return `${year} is not leap year`;
	}
}

// console.log(isLeapYear(2052));
// console.log(isLeapYear(2053));

function isLeapYear2(year){
	if(year % 100 !== 0 && year % 4 === 0){
		return `${year} is leap year`
	}else if(year % 400 === 0){
		return `${year} is leap year.condition 400 divide.`;
	}else{
		return `${year} is not leap year`
	}
}

console.log(isLeapYear2(2052));
console.log(isLeapYear2(2400));
console.log(isLeapYear2(2100));