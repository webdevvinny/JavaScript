

let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let seconds = time.getSeconds();
let milliSeconds = time.getMilliseconds();
let day = time.getDay();
let dates = time.getDate();
let month = time.getMonth(); 
let year = time.getFullYear();

if (day === 1) {
  console.log(
    "It is monday!!! and the time is: " + hour + ":" + minute + ":" + seconds
  );
} else if (day === 2) {
  console.log(
    "It is Tuesday!!! and the time is: " + hour + ":" + minute + ":" + seconds
  );
} else if (day === 3) {
  console.log(
    "It is on wednesday and the time is: " + hour + ":" + minute + ":" + seconds
  );
} else if (day === 4) {
  console.log(
    "It is thursday!!! and the time is: " + hour + ":" + minute + ":" + seconds
  );
} else if (day === 5) {
  console.log(
    "It is friday!!! and the time is: " + hour + ":" + minute + ":" + seconds
  );
} else if (day === 6) {
  console.log(
    "It is saturday!!! and the time is: " + hour + ":" + minute + ":" + seconds
  );
} else {
  console.log(
    "It is sunday!!! and the time is: " + hour + ":" + minute + ":" + seconds
  );
}

let arrays = ['hello', 'world', 'javaScript', 'Python', 'Index'];

arrays.forEach((value, index, a) => {console.log(value, index, a)});
let row1 = arrays.filter((value, index) => {return value[index] < 2 ? value : 'hello'})

console.log(row1);
// let timeDisplay = setInterval(() => { return new Date().toTimeString()}, 1000);

// console.log(timeDisplay);

let arr = ['hello', 'world', 'javaScript', 'Python', 'Index'];

const random = arr[Math.floor(Math.random() * arr.length)];

console.log(random)

let arr1 = [];

console.log(Array(100).fill().map((q, i) => i + 1));



/*
let count = 11;
let num = 0;
let dismiss = setInterval(countNum, 1000);
function countNum(){
      count -=1;
      console.log(count);
      if(num >= count){
            clearInterval(dismiss);
            console.log('Hi MOM I MISS YOU!!!!')
      }
}
*/

//console.log([2, 9, 3, 23, 78, 30, 19, 7, 39, 1, 24, 0, 21].filter((value, index) => { (value <= 10) ? return true : return false}));

let arrayNumbers = [];
for(let i = 1; i < 100 ; i ++){
   arrayNumbers.push(i);
}
arrayNumbers.map((value, index) => {console.log(value + ' multiplied by ' + index + ' is equal to: ' + (value * index))});

