const filterInput = document.getElementById("filters");
const input = document.getElementById("input");
const dataFil = document.querySelectorAll(".dataFil");
const hideLoad = document.querySelector(".loading");
const contCard = document.getElementById("content-results__img");
const next = document.getElementById("next");
const btnLoad = document.getElementById("loadMore");


async function getCard() {
  const url = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
  const response = await url.json();
  //hidingLoad(response)
  return response;
}

async function renderCards(){
  const response = await getCard();
  contCard.innerHTML = " "
  //console.log(response)
let randomNum = Math.floor(Math.random() * 1000)
    let max = randomNum + 7;
  response.data.slice(randomNum, max).forEach(function(card){
    console.log(card)
contCard.innerHTML += `<img src="${card.card_images[0].image_url}" alt="" loading="lazy" />`;
  })
}

 /*function showRandom(data) {
    contCard.innerHTML = "";
    let randomNum = Math.floor(Math.random() * 1000)
    let max = randomNum + 9;

  data.slice(randomNum, max).forEach((names) => {
    console.log(data);
    console.log(data.indexOf(max))
    names.card_images.slice(0, 6).forEach((cards) => {
      console.log(max)
      console.log(cards)
      contCard.innerHTML += `<img value="${cards.id}" src="${cards.image_url}" alt="" />`;
    });
  });

  return max;
}*/


// btnLoad.addEventListener('click', function(){
//   alert('Hello')
// })


/*function hidingLoad(show){
  if(show){
    return hideLoad.classList.add('hide')
  } else {
    return;
  }
}*/

renderCards()
