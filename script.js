// //your code here
const btn = document.querySelector("button");
const main =  document.querySelector("main");
const text = document.querySelector("p");

main.id = "app";
main.className = "day";

text.id = "ptag";
text.innerText = "I am an AccioJob student, ready to become an awesome full stack developer.";

btn.id = "swap";
btn.className = "button_day";

const swapTheme = () => {
	// console.log("hello");
	main.classList.toggle("night");
	btn.classList.toggle("button_night");
}

btn.addEventListener('click', swapTheme);