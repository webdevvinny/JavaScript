// document.body.style.backgroundColor = "green";
// document.body.innerHTML = "Hello JavaScript!!!"

// document.getElementById("sub").onclick = function () {
      
//             document.querySelector('#sub').innerHTML = `Subscribed`
// }


// document.getElementById("submit").onclick = function () {
     
//       let colorPicked = document.querySelector('#choosedColor').value;
//       document.querySelector("#chooseColor").style.backgroundColor = colorPicked;
// }

// document.getElementById("choosedColor").onkeydown = function () {
//       document.getElementById('page').innerHTML = `you have typed ` + event.key;
// }

let c =new Date();

let s = c.getMinutes();
console.log(s);

console.log(Math.floor(Date.now()/1000 % 60));

