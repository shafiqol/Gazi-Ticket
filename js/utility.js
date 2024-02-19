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

function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


