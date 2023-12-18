let btn = document.querySelector('.button');
let third = document.querySelector('.third');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let colorCode1 = document.querySelector('.color-code-1');
let colorCode2 = document.querySelector('.color-code-2');
let colorCode3 = document.querySelector('.color-code-3');
let colorCode4 = document.querySelector('.color-code-4');
btn.addEventListener('click', changeColor);
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let i = 0;
let decide = 0, num = 0, str = "", c1 = "";
changeColor();
function changeColor() {
   c1 = giveColor();
   third.style.backgroundColor = c1;
   colorCode1.innerHTML = c1;
   c1 = giveColor();
   four.style.backgroundColor = c1;
   colorCode2.innerHTML = c1;
   c1 = giveColor();
   five.style.backgroundColor = c1;
   colorCode3.innerHTML = c1;
   c1 = giveColor();
   six.style.backgroundColor = c1;
   colorCode4.innerHTML = c1;

};
function giveColor() {
   str = "#";
   for (i = 0; i < 6; i++) {
      decide = Math.floor((Math.random() * 2));
      if (decide == 0) {
         num = Math.floor((Math.random() * 10));
         str = str + String(num);
      } else {
         num = Math.floor((Math.random() * 6));
         str = str + String(arr[num]);
      }

   }
   return str;
}