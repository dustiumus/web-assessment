console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted!')
}

const rubberDuck = document.querySelector('img');

rubberDuck.addEventListener('mouseover', () => {
	alert('You Rock!');
})



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);