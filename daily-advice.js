var date = new Date();
var hour = date.getHours();
var d = new Date();
var n = d.getDay();
var time = date.getTime();
var month = date.getMonth();
var greeting;
var message = '';


console.log("Hello! Here is some advice for the day:");

message = '';

if (hour > 12 && hour < 18) {
	message += 'Good Afternoon';
} else if (hour >= 18 || hour < 5) {
	message += hour + 'Good Evening';
} else {
	message += 'Good Morning'; 
}

console.log(message);

message = '';

if (n <= 1 && n >= 2) {
	message += 'Ew in Fallon voice';
} else if (n <= 3 || n >= 5) {
	message += 'slump hump';
} else {
	message += 'cheers';
}

console.log(message);

message = '';

// Spring
if (month >= 1 && month <= 4) {
	// Evening
	if (hour > 12 && hour < 18) {
		message += 'it must be beautiful outside!';
	} else {
		message += 'dont forget allergy medicine';
	}
} else if (month >= 5 && month <= 8) {
	if (hour >= 18 && hour < 5) {
		message += 'sunscreen is cool';
	} else { 
		message += 'summa time and shark week';
	}
} else if (month >= 9 && month <= 11) {
	if (hour > 1 && hour >= 11) {
		message += 'Boo';
	} else { 
		message += 'pumpkin everything';
	}
} else if (month <= 12) {
	if (hour >= 18 && hour < 5) {
		message += 'Dont forget mittens';
	} else {
		message += 'snow maybe';
	}
}

console.log(message);