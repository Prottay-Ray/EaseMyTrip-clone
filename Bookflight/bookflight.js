//display id of the user on the navbar
setTimeout(() => {
	let signUpAppend = JSON.parse(localStorage.getItem('signUp'));
	if (signUpAppend[0].isCorrect === true) {
		let div = document.querySelector('#signupLogin');
		div.innerHTML = `hi, ${signUpAppend[0].email}`;
		div.style.padding = '5px';
		div.style.fontSize = '15px';

		// console.log('div:', div);
	}
}, 500);


import navbar from '../component/header.js';

let headerPlace = document.getElementById('placeHeader');

headerPlace.innerHTML = navbar();

// var ticketObj = {
// 	"aircraft_code" : "ID",
// 	"aircraft_number" : 4420,
// 	"airline_name" : "Indigo",
// 	"destination" : "Indore",
// 	"journey_date" : "2021-10-03",
// 	"landing_time": "12:16",
//     "source" : "Delhi",
// 	"price" : 4555,
// 	"takeoff_time": "10:30"
// };
 




//localStorage.setItem("bookingDetailOfUser",JSON.stringify(ticketObj));  nnot used


let  bookedTicket = JSON.parse(localStorage.getItem("bookingDetailOfUser"));

let userDetail = JSON.parse(localStorage.getItem("searchQuery"));


function timeDiff() {
	let tOff = bookedTicket.takeoff_time;
	let landIng = bookedTicket.landing_time;

	let toffInMin = parseInt(tOff.slice(0, 2)) * 60 + parseInt(tOff.slice(3, 6));
	let landIngInMin = parseInt(landIng.slice(0, 2)) * 60 + parseInt(landIng.slice(3, 6));

	if (landIngInMin < toffInMin) {
		landIngInMin += 24 * 60;
	}

	let hrs = Math.floor((landIngInMin - toffInMin) / 60);
	let min = (landIngInMin - toffInMin) % 60;
	return `${hrs}h ${min}m`;
}



document.getElementById("flightRoute").innerHTML = `${bookedTicket.source}-${bookedTicket.destination}`;

document.getElementById("departDate").innerHTML = bookedTicket.journey_date;

document.getElementById("Carrier").innerHTML = bookedTicket.airline_name;

document.getElementById("departTime").innerText = bookedTicket.takeoff_time;

document.getElementById("duration").innerHTML = `${timeDiff()}`;

document.getElementById("landingDate").innerText = bookedTicket.landing_time;

document.getElementById("aircraftName").innerHTML = `${bookedTicket.aircraft_code} - ${bookedTicket.aircraft_number}`;

document.getElementById("source").innerText = userDetail.from;

document.getElementById("destination").innerText = userDetail.to;

document.getElementById("takeoffDate").innerText = userDetail.depart;

document.getElementById("arrivalDate").innerText = userDetail.arrive;

document.getElementById("adult").innerText =userDetail.adultCount;

document.getElementById("child").innerText = userDetail.childrenCount;

document.getElementById("infant").innerText = userDetail.infantCount;

document.getElementById("price").innerHTML =`&#8377  ${bookedTicket.price} `;

var payAmount = bookedTicket.price + 779;

localStorage.setItem("grandTotalAmount",payAmount);

document.getElementById("payableamount").innerHTML = `&#8377  ${payAmount} `;