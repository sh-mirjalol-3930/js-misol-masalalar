let L = 1000;
let m = L / 100; 
console.log(m); 




let M = 15000;
let kg = M / 1000;
console.log(kg);




let bayt = 1024;
let kb = bayt / 1024;
console.log(kb);




let A = 1000;
let B = 100;
let C = A / B ;
console.log(C);




let ikkixonali_son = 55;

if (ikkixonali_son >= 10 & ikkixonali_son <= 99) {
  let onlik = (ikkixonali_son / 10);
  let birlik = ikkixonali_son % 10; 
  console.log(onlik);
  console.log(birlik);
}else {
  console.log();
}




let number = 66;

if (number >= 10 & number <= 99) {
  let tens = (number / 10);
  let units = number % 10;
  let sum = tens + units;

  console.log(sum);
}else {
  console.log();
}







let uchxonali = 123;

if (uchxonali >= 100 & uchxonali <= 999) {
  let hundreds = (uchxonali / 100);
  console.log(hundreds);
}else {
  console.log();
}





let number11 = 123; 
let sum = 0;
if (number11 >= 100 && number11 <= 999) {
    let yuzlar = (number11 / 100);
    let onlar = ((number11 % 100) / 10);
    let birlar = number11 % 10;
    sum = yuzlar + onlar + birlar;
    console.log(sum);
}






let number12 = 234;
let reversed = 0;
if (number12 >= 100 && number12 <= 999) {
    let yuzlar = Math.floor(number12 / 100);
    let onlar = Math.floor((number12 % 100) / 10);
    let birlar = number12 % 10;
    reversed = birlar * 100 + onlar * 10 + yuzlar;
    console.log(reversed);
}







let number13 = 789;
let yangi = 0;
if (number13 >= 100 && number13 <= 999) {
    let yuzlar = Math.floor(number13 / 100);
    let qolgani = number13 % 100;
    yangi = qolgani * 10 + yuzlar;
    console.log(yangi);
}
