//**** simple math oparetion**//
var nam1 = 50;
var nam2 = 70;
var total = nam1 + nam2;
console.log(total);
console.log(nam1 + nam2);
console.log(nam1 - nam2);
console.log(nam1 * nam2);
console.log(nam1 / nam2);
//another//
var video = 104;
var daily = 15;
console.log(video / daily);
//##class no 12##//
//*rinatok teke donattok man ber kora */
var num1 = -20;
var sum = Math.abs(num1);
console.log(sum);
//round man ber kora//

var voter = 0.5;
//0.5 teke 0.9 porjonto 1 hoye jabe//
//0.1 teke 0.4 porjonto 0 hoye jabe//
var sum = Math.round(voter);
console.log(sum);

//varriable er man jai takuk na kno 1kore dibe//
var voter = 0.123455;
var sum = Math.ceil(voter);
console.log(sum);

//1 teke kom holei 0 kore dey(floor er maddome//)
var voter = 0.9999;
var sum = Math.floor(voter);
console.log(sum);

//lotaty kora//
//random er man (0.1-0.9)//
var lotery = Math.random() * 100;
console.log(lotery);

//**class no 17 */
//##if-else ##//
var x = 5;
var y = 7;
if (y > x) {
    console.log("y boro");
}
else {
    consol.log("x bor0");
};
if (x < y) {
    console.log("x coto");
}
else {
    console.log("y boro");
};

//else-if er  babohar//
var x = 5;
var y = 5;
if(x > y){
    console.log("x boro");
}
/*if abog else sudumatro akbar use kora jay but (else if)
akadik bar babohar kora jay */

else if (y > x){
    consol.log("y boro");
}
else{
    console.log("both aere equal");
};

//class 18
//swich statement

var sum = 20;
switch(sum){
    case 20:
        console.log("this is 20");
        break;
    case 15:
        console.log("this is 15");
        break;
    case 10:
        console.log("this is 10");
        break;
    default:
        console.log("khuje pai ni");
        break;
}
//class 19
//time and date //
var myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getMilliseconds());
//