const name = document.querySelector(".name"),
    age = document.querySelector(".age"),
    email = document.querySelector(".email"),
    btn = document.querySelector(".btn");

btn.addEventListener('click', (element) => {
    element.preventDefault()
    let isConfirmed = confirm(`
    name: ${name.value}
    age:${age.value}
    email:${email.value}
    do you want to continue`);
    if (isConfirmed) {
        alert(`Congratulations `)
    }
});