const div = document.querySelector('div');
console.log(new Date().getHours(), new Date().getMinutes());
setInterval(() => {
    div.innerHTML = `${new Date().getHours()>10?new Date().getHours():'0'+new Date().getHours()}:${new Date().getUTCMinutes()>10?new Date().getUTCMinutes():'0'+new Date().getUTCMinutes()}:${new Date().getSeconds()>10?new Date().getSeconds():'0'+new Date().getSeconds()}`
}, 1000);