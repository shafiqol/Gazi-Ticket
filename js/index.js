
function scrollToMainSection() {
    const mainSection = document.getElementById('main-section');
    mainSection.scrollIntoView({ behavior: 'smooth' });
}

const scrollToMainButton = document.getElementById('scrollToMain');
scrollToMainButton.addEventListener('click', scrollToMainSection);

const buttons = document.getElementsByClassName('seat-button')
for(const button of buttons){
	
}