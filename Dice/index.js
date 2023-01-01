// var p1 =prompt("enter 1st Player Name");
// var p2 =prompt("enter 2nd Player Name");
var random_number = Math.floor((Math.random()*6)+1);
switch (random_number) {
  case 1:
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    break;
  default:
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
var random_number2 = Math.floor((Math.random()*6)+1);
switch (random_number2) {
  case 1:
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    break;
  default:
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
if (random_number>random_number2) {
     document.querySelector("h1").innerHTML="p1 Won Congratulations!";
}
else if (random_number==random_number2) {
      document.querySelector("h1").innerHTML="Draw Congratulations!";
}
 else {

     document.querySelector("h1").innerHTML="p2 Won Congratulations!";
}
