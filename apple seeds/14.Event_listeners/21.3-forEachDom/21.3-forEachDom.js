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
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.appendChild(document.createTextNode("Jimmy Arnold"));
li1.setAttribute("data-id", "167464");
ol.appendChild(li1);

li2.appendChild(document.createTextNode("Martha Goldman"));
li2.setAttribute("data-id", "578447");
ol.appendChild(li2);

li3.appendChild(document.createTextNode("Tim Burton"));
li3.setAttribute("data-id", "864578");
ol.appendChild(li3);
ol.style.listStyle = ("none");
document.body.appendChild(ol);