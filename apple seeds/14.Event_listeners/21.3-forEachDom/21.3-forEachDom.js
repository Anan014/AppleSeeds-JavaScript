const users = [{
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ol = document.createElement("ol");


users.forEach(element => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${element.firstName} ${element.lastName}`));
    li.setAttribute("data-id", `${element.id}`);
    ol.appendChild(li);
});

ol.style.listStyle = ("none");
document.body.appendChild(ol);