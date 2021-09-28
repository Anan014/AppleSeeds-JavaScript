const startHere = document.querySelector('.start-here');

//1
startHere.innerHTML = "main title"
console.log(startHere);


//2
let next_li = startHere.nextElementSibling;
console.log(next_li);

let low_ul = startHere.nextElementSibling.children[0];
console.log(low_ul);

let listItems = low_ul.children;
console.log(listItems);

let subTitle4 = document.createElement("li");
subTitle4.appendChild(document.createTextNode("sub title 4"));
low_ul.appendChild(subTitle4);
console.log(low_ul);

//3
let list = startHere.parentElement;
console.log(list);

list.removeChild(list.children[3]);
console.log(list);

//4
let main_ul = startHere.parentElement;
console.log(main_ul);

let body_element = main_ul.parentElement;
console.log(body_element);

let header_element = body_element.previousElementSibling;
console.log(header_element);

let title_element = header_element.children[2];
console.log(title_element);

title_element.innerHTML = ("Master of the DOM");

//5
let div_element = main_ul.nextElementSibling;
console.log(div_element);

console.log(div_element.children[0].innerHTML = ("I have Done it bitches"));