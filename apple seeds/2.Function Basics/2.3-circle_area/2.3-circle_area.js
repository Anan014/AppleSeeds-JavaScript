let radius

function calculatecirclearea() {
    let area = Math.PI * Math.pow(arguments[0], 2);
    console.log(area);
    //console.log(Math.round(area * 100) / 100);
    console.log(area.toFixed(2));
}
radius = 10;
calculatecirclearea(radius);