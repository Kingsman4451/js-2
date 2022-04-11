
var age = 18;
var yourAge = parseInt(prompt("Iltimos yoshingizni kiriting!"), 10);
var text2 = document.createElement("p");
document.body.style.backgroundColor = "cyan";
text2.style.color = "red";
text2.style.fontSize = "60px";
text2.style.fontWeight = "bold";
text2.style.textAlign = "center";

if(yourAge >= age) {
  text2.textContent = "Tabriklaymiz Mototsikl musboqasiga qatnasha olasiz";
  document.body.append(text2);
}
else{
  text2.textContent = `Uzur Mototsikl musobaqasiga qatnashishingiz uchun ${age - yourAge} yosh kichkinasiz`;
  document.body.append(text2);
}