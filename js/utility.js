function getTextElementValueById(elementId) {
	const element = document.getElementById(elementId);
	const elementValueText = element.innerText;
	const value = parseInt(elementValueText);
	return value;
}

function setInnerText(elementId, value) {
	document.getElementById(elementId).innerText = value;
}

function totalCost(id, value) {
	const totalPrice = getTextElementValueById(id);
	const sum = totalPrice + value;
	setInnerText(id, sum);
}
function grandTotalCost(id, value) {
	const totalPrice = getTextElementValueById(id);
	const sum = totalPrice + value;
	setInnerText(id, sum);
}


function getElementTextById(elementId) {
	const element = document.getElementById(elementId);
	const text = element.value;
	return text;
}

// const newDiv = document.createElement('div');
// newDiv.setAttribute('class', 'flex justify-between');
// const tag1 = document.createElement('p');
// tag1.innerText = btn;
// newDiv.appendChild(tag1);
// const tag2 = document.createElement('p');
// tag2.innerText = 'Economoy';
// newDiv.appendChild(tag2);
// const tag3 = document.createElement('p');
// tag3.innerText = ticketPrice;
// newDiv.appendChild(tag3);
// const bookingSit = document.getElementById('booking-sit');
// bookingSit.appendChild(newDiv);
