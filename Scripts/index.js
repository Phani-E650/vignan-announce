console.log("TEST OK");

const TheCardsDiv = document.getElementById("annouce-cards-div");
var PrimaryJSON,
  All_the_cards = "";

window.addEventListener("load", () => {
  fetch("data/announcements.json")
    .then((response) => response.json())
    .then((json) => {
      PrimaryJSON = json;
      let latest_from_JSON = PrimaryJSON.latest;

      latest_from_JSON.forEach((i) => {
        let aCard = CardTemplate(i.title, i.date, i.author, i.content_preview);
        All_the_cards += aCard;
      });
      TheCardsDiv.innerHTML = All_the_cards;
    });
});

function CardTemplate(title, date, author, content) {
  return `        
    <div class="card-announce">
      <h3>${title}</h3>
      <div class="card-meta">
        <img src="download.jfif " alt="Image " class="ca-time"></img>
      </div>
      <p class="ca-content">${content}</p>
      <p>Click on the play button to play a sound:</p>

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
`;
    </div>
}
