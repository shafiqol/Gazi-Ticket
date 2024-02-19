function scrollToMainSection() {
    const mainSection = document.getElementById("main-section");
    mainSection.scrollIntoView({ behavior: "smooth" });
}

const scrollToMainButton = document.getElementById("scrollToMain");
scrollToMainButton.addEventListener("click", scrollToMainSection);

const buttons = document.getElementsByClassName("seat-button");

const ticketPrice = getTextElementValueById("per-ticket-price");

let count = 0;
for (const button of buttons) {
    button.addEventListener("click", function (e) {
    button.classList.add("button-bg");
    button.classList.remove("bg-gray-200");
    button.classList.add("pointer-events-none");
    count = count + 1;
    setInnerText("seat-count", count);
    const totalSeats = getTextElementValueById("seat-left");
    let leftSeats = totalSeats - 1;
    setInnerText("seat-left", leftSeats);
    const buttonInnerText = button.innerText;
    // create element
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "flex justify-between");
    const tag1 = document.createElement("p");
    tag1.innerText = buttonInnerText;
    newDiv.appendChild(tag1);
    const tag2 = document.createElement("p");
    tag2.innerText = "Economoy";
    newDiv.appendChild(tag2);
    const tag3 = document.createElement("p");
    tag3.innerText = ticketPrice;
    newDiv.appendChild(tag3);
    const bookingSit = document.getElementById("seat-details");
    bookingSit.appendChild(newDiv);

    totalCost("total-price", ticketPrice);
    grandTotalCost("grand-total", ticketPrice);
    });
}

const apply = document.getElementById("apply");
apply.addEventListener("click", function (e) {
    const totalPrice = getTextElementValueById("total-price");
	const textValue = getElementTextById("input-coupon");
	if (textValue == "Couple 20") {
    	setInnerText("grand-total", totalPrice - totalPrice * 0.2);
	} else if (textValue == "NEW15") {
		setInnerText("grand-total", totalPrice - totalPrice * 0.15);
	} else alert("please select right coupon");
})

function addAndHidden() {
    hiddenElementById('home-screen');
    showElementById('bonuse');
}
function replace() {
    hiddenElementById('bonuse');
    showElementById('home-screen');
}