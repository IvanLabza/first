

class Game {
  name = "Violin Charades";
}
const myGame = new Game();
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

const app = document.querySelector("#root");
app.append(p);