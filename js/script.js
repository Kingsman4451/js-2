var price = 100;
var yourPrice = prompt("Summani kiriting").trim();
var text = document.createElement("p");
document.body.style.backgroundColor = "cyan";
text.style.color = "red";
text.style.fontSize = "60px";
text.style.fontWeight = "bold";
text.style.textAlign = "center";


if(+yourPrice > price) {
  text.textContent = `Tabriklaymiz pulingiz ${yourPrice - price}$ ga ko'p`;
  document.body.append(text);
}else if(+yourPrice == price){
  text.textContent = `Tabriklaymiz pulingiz yetadi`;
  document.body.append(text);
}else{
  text.textContent = `Uzur hisobigizda ${price - yourPrice}$ yetmayapti`;
  document.body.append(text);
}



